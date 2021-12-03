import { Dictionary, SupaRow } from '../../types';
import { INIT_ACTIONTYPE } from './base';
export interface RowInitialState {
    rows: SupaRow[];
    selectedRows: ReadonlySet<number>;
    selectedCellPosition: {
        idx: number;
        rowIdx: number;
    } | null;
    page: number;
    rowsPerPage: number;
    totalRows: number;
}
export declare const rowInitialState: RowInitialState;
declare type ROW_ACTIONTYPE = INIT_ACTIONTYPE | {
    type: 'SELECTED_CELL_CHANGE';
    payload: {
        position: {
            idx: number;
            rowIdx: number;
        };
    };
} | {
    type: 'SELECTED_ROWS_CHANGE';
    payload: {
        selectedRows: ReadonlySet<number>;
    };
} | {
    type: 'SET_PAGE';
    payload: number;
} | {
    type: 'SET_ROWS_PER_PAGE';
    payload: number;
} | {
    type: 'SET_ROWS';
    payload: {
        rows: SupaRow[];
    };
} | {
    type: 'SET_ROWS_COUNT';
    payload: number;
} | {
    type: 'ADD_ROWS';
    payload: SupaRow[];
} | {
    type: 'ADD_NEW_ROW';
    payload: Dictionary<any>;
} | {
    type: 'EDIT_ROW';
    payload: {
        row: Dictionary<any>;
        idx: number;
    };
} | {
    type: 'REMOVE_ROWS';
    payload: {
        rowIdxs: number[];
    };
};
declare const RowReducer: (state: RowInitialState, action: ROW_ACTIONTYPE) => RowInitialState | {
    page: number;
    selectedCellPosition: null;
    selectedRows: Set<unknown>;
    totalRows: number;
    rows: SupaRow[];
    rowsPerPage: number;
} | {
    page: number;
    refreshPageFlag: number;
    rows: SupaRow[];
    selectedRows: ReadonlySet<number>;
    selectedCellPosition: {
        idx: number;
        rowIdx: number;
    } | null;
    rowsPerPage: number;
    totalRows: number;
};
export default RowReducer;
