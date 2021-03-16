import * as React from 'react';
import { Column } from '@phamhieu1998/react-data-grid';
import { ColumnType, SupaColumn, SupaRow, SupaTable } from './types';
import {
  CheckboxEditor,
  NumberEditor,
  SelectEditor,
  TextEditor,
} from './components/editor';
import { ColumnHeader, SelectColumn } from './components/grid';

export function getGridColumns(
  table: SupaTable,
  options?: {
    onEditRow?: (rowIdx: number) => void;
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
      minWidth: 50,
      frozen: x.isIdentity,
    };
    const columnType = _getColumnType(x);

    columnDef.headerRenderer = props => {
      return (
        <ColumnHeader {...props} columnId={x.id} columnType={columnType} />
      );
    };

    _setupColumnEditor(x, columnType, columnDef);
    return columnDef;
  });
  console.log('columns', columns);
  return [selectColumn, ...columns];
}

function _setupColumnEditor(
  columnDef: SupaColumn,
  columnType: ColumnType,
  config: Column<SupaRow>
) {
  if (columnDef.isIdentity || !columnDef.isUpdatable) {
    return;
  }

  switch (columnType) {
    case 'boolean': {
      config.editor = CheckboxEditor;
      config.formatter = p => {
        const value = p.row[p.column.key] as boolean;
        return <>{value ? 'true' : 'false'}</>;
      };
      config.editorOptions = {
        editOnClick: true,
      };
      break;
    }
    case 'date': {
      break;
    }
    case 'enum': {
      const options = columnDef.enums.map(x => {
        return { label: x, value: x };
      });
      config.formatter = p => {
        return <>{p.row[p.column.key]}</>;
      };
      config.editor = p => <SelectEditor {...p} options={options} />;
      config.editorOptions = {
        editOnClick: true,
      };
      break;
    }
    case 'foreign_key': {
      break;
    }
    case 'json': {
      break;
    }
    case 'number': {
      config.editor = NumberEditor;
      break;
    }
    case 'text': {
      config.editor = TextEditor;
      config.editorOptions = {
        editOnClick: true,
      };
      break;
    }
    default: {
      break;
    }
  }
}

function _getColumnType(columnDef: SupaColumn): ColumnType {
  if (columnDef.isIdentity) {
    return 'primary_key';
  } else if (_isNumericalColumn(columnDef.dataType)) {
    return 'number';
  } else if (_isJsonColumn(columnDef.dataType)) {
    return 'json';
  } else if (_isTextColumn(columnDef.dataType)) {
    return 'text';
  } else if (_isDateTimeColumn(columnDef.dataType)) {
    return 'date';
  } else if (_isBoolColumn(columnDef.dataType)) {
    return 'boolean';
  } else if (_isEnumColumn(columnDef.dataType)) {
    return 'enum';
  } else if (_isForeignKeyColumn()) {
    return 'foreign_key';
  } else return 'unknown';
}

function _getColumnWidth(columnDef: SupaColumn): string | number | undefined {
  if (_isNumericalColumn(columnDef.dataType)) {
    return 100;
  } else if (_isDateTimeColumn(columnDef.dataType)) {
    return 150;
  } else if (_isBoolColumn(columnDef.dataType)) {
    return 100;
  } else if (_isEnumColumn(columnDef.dataType)) {
    return 150;
  } else return 250;
}

const NUMERICAL_TYPES = [
  'bigint',
  'bigserial',
  'int2',
  'int4',
  'int8',
  'integer',
  'float4',
  'float8',
  'real',
  'smallint',
  'smallserial',
  'serial2',
  'serial4',
  'serial8',
];
function _isNumericalColumn(type: string) {
  return NUMERICAL_TYPES.indexOf(type.toLowerCase()) > -1;
}

const JSON_TYPES = ['json', 'jsonb'];
function _isJsonColumn(type: string) {
  return JSON_TYPES.indexOf(type.toLowerCase()) > -1;
}

const TEXT_TYPES = ['text', 'varchar'];
function _isTextColumn(type: string) {
  return TEXT_TYPES.indexOf(type.toLowerCase()) > -1;
}

const TIMESTAMP_TYPES = ['date', 'time', 'timestamp', 'timetz', 'timestamptz'];
function _isDateTimeColumn(type: string) {
  return TIMESTAMP_TYPES.indexOf(type.toLowerCase()) > -1;
}

const BOOL_TYPES = ['boolean', 'bool'];
function _isBoolColumn(type: string) {
  return BOOL_TYPES.indexOf(type.toLowerCase()) > -1;
}

const ENUM_TYPES = ['user-defined'];
function _isEnumColumn(type: string) {
  return ENUM_TYPES.indexOf(type.toLowerCase()) > -1;
}

// TODO
function _isForeignKeyColumn() {
  return false;
}