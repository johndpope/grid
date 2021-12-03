import BaseReducer, { BaseInitialState } from './base';
import CallbackReducer, { CallbackInitialState } from './callback';
import ColumnReducer, { ColumnInitialState } from './column';
import RowReducer, { RowInitialState } from './row';
import SortReducer, { SortInitialState } from './sort';
import FilterReducer, { FilterInitialState } from './filter';
export interface InitialStateType extends BaseInitialState, CallbackInitialState, ColumnInitialState, FilterInitialState, RowInitialState, SortInitialState {
}
export declare const initialState: {
    sorts: import("../..").Sort[];
    rows: import("../..").SupaRow[];
    selectedRows: ReadonlySet<number>;
    selectedCellPosition: {
        idx: number;
        rowIdx: number;
    } | null;
    page: number;
    rowsPerPage: number;
    totalRows: number;
    filters: import("../..").Filter[];
    gridColumns: import("@supabase/react-data-grid").Column<any, any>[];
    onAddColumn: (() => void) | null;
    onAddRow: (() => void) | null;
    onError: ((error: any) => void) | null;
    onEditRow: ((row: import("../..").SupaRow) => void) | null;
    onEditColumn: ((columnName: string) => void) | null;
    onDeleteColumn: ((columnName: string) => void) | null;
    onSqlQuery: ((query: string) => Promise<{
        data?: any;
        error?: any;
    }>) | null;
    table: import("../..").SupaTable | null;
    metaService: import("../../services/meta").IMetaService | null;
    rowService: import("../../services/row").IRowService | null;
    refreshPageFlag: number;
    isInitialComplete: boolean;
    editable: boolean;
};
export { BaseReducer, CallbackReducer, ColumnReducer, FilterReducer, RowReducer, SortReducer, };
