# Supabase Grid

A react component to display your Postgresql table data.

## Usage

```js
<SupabaseGrid
  table="countries"
  clientProps={{
    supabaseUrl: '',
    supabaseKey: '',
  }}
/>
```

`table` variable can be:

- SupaTable obj
- Table or View name
  - Readonly: support both table and view
  - Editable: only for table. Required to create Postgresql functions below so that it can pull your table info.

## Postgresql Functions

#### Load table info

```sql
CREATE FUNCTION load_table_info(filter_schema text, filter_name text)
returns table (
  id int8,
  schema name,
  name name,
  rows_estimate int8,
  comment text
) LANGUAGE PLPGSQL
AS $$
BEGIN
  RETURN query
    SELECT
      c.oid :: int8 AS id,
      nc.nspname AS schema,
      c.relname AS name,
      pg_stat_get_live_tuples(c.oid) AS live_rows_estimate,
      obj_description(c.oid) AS comment
    FROM
      pg_namespace nc
      JOIN pg_class c ON nc.oid = c.relnamespace
    WHERE
      nc.nspname = filter_schema
      AND c.relname = filter_name
      AND c.relkind IN ('r', 'p')
      AND NOT pg_is_other_temp_schema(nc.oid)
      AND (
        pg_has_role(c.relowner, 'USAGE')
        OR has_table_privilege(
          c.oid,
          'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER'
        )
        OR has_any_column_privilege(c.oid, 'SELECT, INSERT, UPDATE, REFERENCES')
      );
END
$$;
```

#### Load table columns

```sql
CREATE FUNCTION load_table_columns(filter_schema text, filter_name text)
returns table (
  table_id int8,
  schema name,
  table_name name,
  id text,
  ordinal_position int2,
  name name,
  default_value text,
  data_type text,
  format name,
  is_identity bool,
  identity_generation text,
  is_nullable bool,
  is_updatable bool,
  enums json,
  comment text
) LANGUAGE PLPGSQL
AS $$
BEGIN
  RETURN query
    SELECT
      c.oid :: int8 AS table_id,
      nc.nspname AS schema,
      c.relname AS table,
      (c.oid || '.' || a.attnum) AS id,
      a.attnum AS ordinal_position,
      a.attname AS name,
      CASE
        WHEN a.atthasdef THEN pg_get_expr(ad.adbin, ad.adrelid)
        ELSE NULL
      END AS default_value,
      CASE
        WHEN t.typtype = 'd' THEN CASE
          WHEN bt.typelem <> 0 :: oid
          AND bt.typlen = -1 THEN 'ARRAY'
          WHEN nbt.nspname = 'pg_catalog' THEN format_type(t.typbasetype, NULL)
          ELSE 'USER-DEFINED'
        END
        ELSE CASE
          WHEN t.typelem <> 0 :: oid
          AND t.typlen = -1 THEN 'ARRAY'
          WHEN nt.nspname = 'pg_catalog' THEN format_type(a.atttypid, NULL)
          ELSE 'USER-DEFINED'
        END
      END AS data_type,
      COALESCE(bt.typname, t.typname) AS format,
      CASE
        WHEN a.attidentity IN ('a', 'd') THEN TRUE
        ELSE FALSE
      END AS is_identity,
      CASE
        a.attidentity
        WHEN 'a' THEN 'ALWAYS'
        WHEN 'd' THEN 'BY DEFAULT'
        ELSE NULL
      END AS identity_generation,
      CASE
        WHEN a.attnotnull
        OR t.typtype = 'd'
        AND t.typnotnull THEN FALSE
        ELSE TRUE
      END AS is_nullable,
      CASE
        WHEN (
          c.relkind IN ('r', 'p')
        )
        OR (
          c.relkind IN ('v', 'f')
        )
        AND pg_column_is_updatable(c.oid, a.attnum, FALSE) THEN TRUE
        ELSE FALSE
      END AS is_updatable,
      array_to_json(
        array(
          SELECT
            enumlabel
          FROM
            pg_catalog.pg_enum enums
          WHERE
            COALESCE(bt.typname, t.typname) = format_type(enums.enumtypid, NULL)
          ORDER BY
            enums.enumsortorder
        )
      ) AS enums,
      col_description(c.oid, a.attnum) AS comment
    FROM
      pg_attribute a
      LEFT JOIN pg_attrdef ad ON a.attrelid = ad.adrelid
      AND a.attnum = ad.adnum
      JOIN (
        pg_class c
        JOIN pg_namespace nc ON c.relnamespace = nc.oid
      ) ON a.attrelid = c.oid
      JOIN (
        pg_type t
        JOIN pg_namespace nt ON t.typnamespace = nt.oid
      ) ON a.atttypid = t.oid
      LEFT JOIN (
        pg_type bt
        JOIN pg_namespace nbt ON bt.typnamespace = nbt.oid
      ) ON t.typtype = 'd'
      AND t.typbasetype = bt.oid
    WHERE
      NOT pg_is_other_temp_schema(nc.oid)
      AND nc.nspname = filter_schema
      AND c.relname = filter_name
      AND a.attnum > 0
      AND NOT a.attisdropped
      AND (c.relkind IN ('r', 'v', 'f', 'p'))
      AND (
        pg_has_role(c.relowner, 'USAGE')
        OR has_column_privilege(
          c.oid,
          a.attnum,
          'SELECT, INSERT, UPDATE, REFERENCES'
        )
      );
END
$$;
```
