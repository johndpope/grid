import { Column, HeaderRendererProps } from '@supabase/react-data-grid';

export interface Dictionary<T> {
  [Key: string]: T;
}

export interface Sort {
  column: string;
  ascending?: boolean;
  nullsFirst?: boolean;
}

export type FilterOperator =
  | '='
  | '<>'
  | '>'
  | '<'
  | '>='
  | '<='
  | '~~'
  | '~~*'
  | 'in'
  | 'is';

export interface Filter {
  column: string;
  operator: FilterOperator;
  value: any;
}

export interface SavedState {
  filters: Filter[];
  gridColumns: Column<any, any>[];
  sorts: Sort[];
}

export interface DragItem {
  index: number;
  key: string;
}

export type ColumnType =
  | 'array'
  | 'boolean'
  | 'date'
  | 'datetime'
  | 'enum'
  | 'foreign_key'
  | 'json'
  | 'number'
  | 'primary_key'
  | 'text'
  | 'time'
  | 'unknown';

export interface ColumnHeaderProps<R> extends HeaderRendererProps<R> {
  columnType: ColumnType;
  isPrimaryKey: Boolean | undefined;
  format: string;
}
