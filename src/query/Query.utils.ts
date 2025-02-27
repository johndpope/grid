import { ident, literal, format } from '@scaleleap/pg-format';
import {
  Dictionary,
  Filter,
  QueryPagination,
  QueryTable,
  Sort,
} from '../types';

export function countQuery(
  table: QueryTable,
  options?: {
    filters?: Filter[];
  }
) {
  let query = `select count(*) from ${queryTable(table)}`;
  const { filters } = options ?? {};
  if (filters) {
    query = applyFilters(query, filters);
  }
  return query + ';';
}

export function deleteQuery(
  table: QueryTable,
  filters?: Filter[],
  options?: {
    returning?: boolean;
  }
) {
  if (!filters || filters.length == 0) {
    throw { message: 'no filters for this delete query' };
  }
  let query = `delete from ${queryTable(table)}`;
  const { returning } = options ?? {};
  if (filters) {
    query = applyFilters(query, filters);
  }
  if (returning) {
    query += ' returning *';
  }
  return query + ';';
}

export function insertQuery(
  table: QueryTable,
  values: Dictionary<any>[],
  options?: {
    returning?: boolean;
  }
) {
  if (!values || values.length == 0) {
    throw { message: 'no value to insert' };
  }
  const { returning } = options ?? {};
  const queryColumns = Object.keys(values[0])
    .map((x) => ident(x))
    .join(',');
  let query = '';
  if (queryColumns.length == 0) {
    query = format(
      'insert into %1$s select from jsonb_populate_recordset(null::%1$s, %2$s)',
      queryTable(table),
      literal(JSON.stringify(values))
    );
  } else {
    query = format(
      'insert into %1$s (%2$s) select %2$s from jsonb_populate_recordset(null::%1$s, %3$s)',
      queryTable(table),
      queryColumns,
      literal(JSON.stringify(values))
    );
  }
  if (returning) {
    query += ' returning *';
  }
  return query + ';';
}

export function selectQuery(
  table: QueryTable,
  columns?: string[],
  options?: {
    filters?: Filter[];
    pagination?: QueryPagination;
    sorts?: Sort[];
  }
) {
  let query = '';
  const queryColumn = columns?.map((x) => ident(x)).join(', ') ?? '*';
  query += `select ${queryColumn} from ${queryTable(table)}`;

  const { filters, pagination, sorts } = options ?? {};
  if (filters) {
    query = applyFilters(query, filters);
  }
  if (sorts) {
    query = applySorts(query, sorts);
  }
  if (pagination) {
    const { limit, offset } = pagination ?? {};
    query += ` limit ${literal(limit)} offset ${literal(offset)}`;
  }
  return query + ';';
}

export function updateQuery(
  table: QueryTable,
  value: Dictionary<any>,
  options?: {
    filters?: Filter[];
    returning?: boolean;
  }
) {
  const { filters, returning } = options ?? {};
  if (!filters || filters.length == 0) {
    throw { message: 'no filters for this update query' };
  }
  const queryColumns = Object.keys(value)
    .map((x) => ident(x))
    .join(',');
  let query = format(
    'update %1$s set (%2$s) = (select %2$s from json_populate_record(null::%1$s, %3$s))',
    queryTable(table),
    queryColumns,
    literal(JSON.stringify(value))
  );
  if (filters) {
    query = applyFilters(query, filters);
  }
  if (returning) {
    query += ' returning *';
  }
  return query + ';';
}

//============================================================
// Filter Utils
//============================================================

function applyFilters(query: string, filters: Filter[]) {
  if (filters.length == 0) return query;
  query += ` where ${filters
    .map((filter) => {
      switch (filter.operator) {
        case 'in':
          return inFilterSql(filter);
        case 'is':
          return isFilterSql(filter);
        default:
          return `${ident(filter.column)} ${filter.operator} ${filterLiteral(
            filter.value
          )}`;
      }
    })
    .join(' and ')}`;
  return query;
}

function inFilterSql(filter: Filter) {
  const filterValueTxt = String(filter.value);
  const values = filterValueTxt.split(',').map((x: any) => filterLiteral(x));
  return `${ident(filter.column)} ${filter.operator} (${values.join(',')})`;
}

function isFilterSql(filter: Filter) {
  const filterValueTxt = String(filter.value);
  switch (filterValueTxt) {
    case 'null':
    case 'false':
    case 'true':
    case 'not null':
      return `${ident(filter.column)} ${filter.operator} ${filterValueTxt}`;
    default:
      return `${ident(filter.column)} ${filter.operator} ${filterLiteral(
        filter.value
      )}`;
  }
}

function filterLiteral(value: any) {
  if (typeof value === 'string') {
    const temp = value.trim();
    if (temp?.startsWith('ARRAY[') && temp?.endsWith(']')) {
      return temp;
    } else {
      return literal(temp);
    }
  }
  return value;
}

//============================================================
// Sort Utils
//============================================================

function applySorts(query: string, sorts: Sort[]) {
  if (sorts.length == 0) return query;
  query += ` order by ${sorts
    .map((x) => {
      const order = x.ascending ? 'asc' : 'desc';
      const nullOrder = x.nullsFirst ? 'nulls first' : 'nulls last';
      return `${ident(x.column)} ${order} ${nullOrder}`;
    })
    .join(', ')}`;
  return query;
}

//============================================================
// Misc
//============================================================

function queryTable(table: QueryTable) {
  return `${ident(table.schema)}.${ident(table.name)}`;
}
