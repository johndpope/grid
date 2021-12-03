import { SupaRow } from '../../types';
export interface CallbackInitialState {
    onAddColumn: (() => void) | null;
    onAddRow: (() => void) | null;
    onError: ((error: any) => void) | null;
    onEditRow: ((row: SupaRow) => void) | null;
    onEditColumn: ((columnName: string) => void) | null;
    onDeleteColumn: ((columnName: string) => void) | null;
    onSqlQuery: ((query: string) => Promise<{
        data?: any;
        error?: any;
    }>) | null;
}
export declare const callbackInitialState: CallbackInitialState;
declare type CALLBACK_ACTIONTYPE = {
    type: 'INIT_CALLBACK';
    payload: {
        onAddColumn: (() => void) | null;
        onAddRow: (() => void) | null;
        onError: ((error: any) => void) | null;
        onEditRow: ((row: SupaRow) => void) | null;
        onEditColumn: ((columnName: string) => void) | null;
        onDeleteColumn: ((columnName: string) => void) | null;
        onSqlQuery: ((query: string) => Promise<{
            data?: any;
            error?: any;
        }>) | null;
    };
};
declare const CallbackReducer: (state: CallbackInitialState, action: CALLBACK_ACTIONTYPE) => CallbackInitialState;
export default CallbackReducer;
