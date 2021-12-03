import { Column } from '@supabase/react-data-grid';
import { GridProps, SavedState, SupaTable } from '../../types';
import { IRowService, SqlRowService } from '../../services/row';
import { IMetaService, SqlMetaService } from '../../services/meta';
export interface BaseInitialState {
    table: SupaTable | null;
    metaService: IMetaService | null;
    rowService: IRowService | null;
    refreshPageFlag: number;
    isInitialComplete: boolean;
    editable: boolean;
}
export declare const baseInitialState: BaseInitialState;
export declare type INIT_ACTIONTYPE = {
    type: 'INIT_CLIENT';
    payload: {
        onSqlQuery: (query: string) => Promise<{
            data?: any;
            error?: any;
        }>;
    };
} | {
    type: 'INIT_TABLE';
    payload: {
        table: SupaTable;
        gridColumns: Column<any, any>[];
        gridProps?: GridProps;
        savedState?: SavedState;
        editable?: boolean;
        onSqlQuery: (query: string) => Promise<{
            data?: any;
            error?: any;
        }>;
        onError: (error: any) => void;
    };
};
declare type BASE_ACTIONTYPE = INIT_ACTIONTYPE;
declare const BaseReducer: (state: BaseInitialState, action: BASE_ACTIONTYPE) => BaseInitialState | {
    metaService: SqlMetaService;
    table: SupaTable | null;
    rowService: IRowService | null;
    refreshPageFlag: number;
    isInitialComplete: boolean;
    editable: boolean;
} | {
    table: SupaTable;
    rowService: SqlRowService;
    refreshPageFlag: number;
    isInitialComplete: boolean;
    editable: boolean;
    metaService: IMetaService | null;
};
export default BaseReducer;
