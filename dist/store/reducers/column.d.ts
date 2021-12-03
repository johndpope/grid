import { Column } from '@supabase/react-data-grid';
import { INIT_ACTIONTYPE } from './base';
export interface ColumnInitialState {
    gridColumns: Column<any, any>[];
}
export declare const columnInitialState: ColumnInitialState;
declare type COLUMN_ACTIONTYPE = INIT_ACTIONTYPE | {
    type: 'MOVE_COLUMN';
    payload: {
        fromKey: string;
        toKey: string;
    };
} | {
    type: 'UPDATE_COLUMN_SIZE';
    payload: {
        index: number;
        width: number;
    };
} | {
    type: 'FREEZE_COLUMN';
    payload: {
        columnKey: string;
    };
} | {
    type: 'UNFREEZE_COLUMN';
    payload: {
        columnKey: string;
    };
};
declare const ColumnReducer: (state: ColumnInitialState, action: COLUMN_ACTIONTYPE) => ColumnInitialState;
export default ColumnReducer;
