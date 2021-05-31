import * as React from 'react';
import { Column, FormatterProps } from '@supabase/react-data-grid';
import { ColumnType, SupaColumn, SupaRow, SupaTable } from '../types';
import {
  CheckboxEditor,
  DateEditor,
  DateTimeEditor,
  JsonEditor,
  ForeignKeyEditor,
  NumberEditor,
  SelectEditor,
  TextEditor,
  TimeEditor,
} from '../components/editor';
import { AddColumn, ColumnHeader, SelectColumn } from '../components/grid';
import { COLUMN_MIN_WIDTH } from '../constants';
import { NullValue } from '../components/common';

export function getGridColumns(
  table: SupaTable,
  options?: {
    onEditRow?: (row: SupaRow) => void;
    onAddColumn?: () => void;
    defaultWidth?: string | number;
  }
): any[] {
  const selectColumn = SelectColumn(options?.onEditRow);
  const columns = table.columns.map(x => {
    let columnDef: Column<SupaRow> = {
      key: x.name,
      name: x.name,
      resizable: true,
      width: options?.defaultWidth || _getColumnWidth(x),
      minWidth: COLUMN_MIN_WIDTH,
      frozen: x.isPrimaryKey,
    };
    const columnType = _getColumnType(x);

    columnDef.headerRenderer = props => {
      return (
        <ColumnHeader
          {...props}
          columnType={columnType}
          isPrimaryKey={x.isPrimaryKey}
          format={x.format}
        />
      );
    };

    _setupColumnEditor(x, columnType, columnDef);
    return columnDef;
  });

  // console.log('table', table);
  // console.log('columns', columns);

  const gridColumns = [selectColumn, ...columns];
  if (options?.onAddColumn) {
    const addColumn = AddColumn(options?.onAddColumn);
    gridColumns.push(addColumn);
  }

  return gridColumns;
}

const DefaultFormatter = (
  p: React.PropsWithChildren<FormatterProps<SupaRow, unknown>>
) => {
  let value = p.row[p.column.key];
  if (!value) return <NullValue />;
  if (typeof value == 'object' || Array.isArray(value)) {
    value = JSON.stringify(value);
  }
  return <>{value}</>;
};

function _setupColumnEditor(
  columnDef: SupaColumn,
  columnType: ColumnType,
  config: Column<SupaRow>
) {
  config.formatter = DefaultFormatter;
  if (columnDef.isPrimaryKey || !columnDef.isUpdatable) {
    return;
  }

  switch (columnType) {
    case 'boolean': {
      config.editor = CheckboxEditor;
      config.formatter = p => {
        const value = p.row[p.column.key] as boolean;
        return <>{value ? 'true' : 'false'}</>;
      };
      break;
    }
    case 'date': {
      config.editor = DateEditor;
      // config.editorOptions = {
      //   editOnClick: true,
      // };
      break;
    }
    case 'datetime': {
      config.editor = DateTimeEditor;
      // config.editorOptions = {
      //   editOnClick: true,
      // };
      break;
    }
    case 'time': {
      config.editor = TimeEditor;
      // config.editorOptions = {
      //   editOnClick: true,
      // };
      break;
    }
    case 'enum': {
      const options = columnDef.enum!.map(x => {
        return { label: x, value: x };
      });
      config.editor = p => <SelectEditor {...p} options={options} />;
      // config.editorOptions = {
      //   editOnClick: true,
      // };
      break;
    }
    case 'foreign_key': {
      config.editor = ForeignKeyEditor;
      // config.editorOptions = {
      //   editOnClick: true,
      // };
      break;
    }
    case 'array':
    case 'json': {
      config.editor = JsonEditor;
      // config.editorOptions = {
      //   editOnClick: true,
      // };
      break;
    }
    case 'number': {
      config.editor = NumberEditor;
      // config.editorOptions = {
      //   editOnClick: true,
      // };
      break;
    }
    case 'text': {
      config.editor = TextEditor;
      // config.editorOptions = {
      //   editOnClick: true,
      // };
      break;
    }
    default: {
      break;
    }
  }
}

function _getColumnType(columnDef: SupaColumn): ColumnType {
  if (_isForeignKeyColumn(columnDef)) {
    return 'foreign_key';
  } else if (_isNumericalColumn(columnDef.dataType)) {
    return 'number';
  } else if (_isArrayColumn(columnDef.dataType)) {
    return 'array';
  } else if (_isJsonColumn(columnDef.dataType)) {
    return 'json';
  } else if (_isTextColumn(columnDef.dataType)) {
    return 'text';
  } else if (_isDateColumn(columnDef.format)) {
    return 'date';
  } else if (_isTimeColumn(columnDef.format)) {
    return 'time';
  } else if (_isDateTimeColumn(columnDef.format)) {
    return 'datetime';
  } else if (_isBoolColumn(columnDef.dataType)) {
    return 'boolean';
  } else if (_isEnumColumn(columnDef.dataType)) {
    return 'enum';
  } else return 'unknown';
}

function _getColumnWidth(columnDef: SupaColumn): string | number | undefined {
  if (_isNumericalColumn(columnDef.dataType)) {
    return 120;
  } else if (
    _isDateTimeColumn(columnDef.format) ||
    _isDateColumn(columnDef.format) ||
    _isTimeColumn(columnDef.format)
  ) {
    return 150;
  } else if (_isBoolColumn(columnDef.dataType)) {
    return 120;
  } else if (_isEnumColumn(columnDef.dataType)) {
    return 150;
  } else return 250;
}

const NUMERICAL_TYPES = [
  'smallint',
  'integer',
  'bigint',
  'decimal',
  'numeric',
  'real',
  'double precision',
  'serial',
  'bigserial',
  'int2',
  'int4',
  'int8',
  'float4',
  'float8',
  'smallserial',
  'serial2',
  'serial4',
  'serial8',
];
function _isNumericalColumn(type: string) {
  return NUMERICAL_TYPES.indexOf(type.toLowerCase()) > -1;
}

const JSON_TYPES = ['json', 'jsonb', 'array'];
function _isJsonColumn(type: string) {
  return JSON_TYPES.indexOf(type.toLowerCase()) > -1;
}

const ARRAY_TYPES = ['array'];
function _isArrayColumn(type: string) {
  return ARRAY_TYPES.indexOf(type.toLowerCase()) > -1;
}

const TEXT_TYPES = ['text', 'varchar'];
function _isTextColumn(type: string) {
  return TEXT_TYPES.indexOf(type.toLowerCase()) > -1;
}

const TIMESTAMP_TYPES = ['timestamp', 'timestamptz'];
function _isDateTimeColumn(type: string) {
  return TIMESTAMP_TYPES.indexOf(type.toLowerCase()) > -1;
}

const DATE_TYPES = ['date'];
function _isDateColumn(type: string) {
  return DATE_TYPES.indexOf(type.toLowerCase()) > -1;
}

const TIME_TYPES = ['time', 'timetz'];
function _isTimeColumn(type: string) {
  return TIME_TYPES.indexOf(type.toLowerCase()) > -1;
}

const BOOL_TYPES = ['boolean', 'bool'];
function _isBoolColumn(type: string) {
  return BOOL_TYPES.indexOf(type.toLowerCase()) > -1;
}

const ENUM_TYPES = ['user-defined'];
function _isEnumColumn(type: string) {
  return ENUM_TYPES.indexOf(type.toLowerCase()) > -1;
}

function _isForeignKeyColumn(columnDef: SupaColumn) {
  const { targetTableSchema, targetTableName, targetColumnName } = columnDef;
  return !!targetTableSchema && !!targetTableName && !!targetColumnName;
}
