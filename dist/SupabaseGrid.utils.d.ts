import { InitialStateType } from './store/reducers';
import { Dictionary, SupabaseGridProps, SupaTable } from './types';
export declare function defaultErrorHandler(error: any): void;
/**
 * Ensure that if editable is false, we should remove all editing actions
 * to prevent rare-case bugs with the UI
 */
export declare function cleanupProps(props: SupabaseGridProps): SupabaseGridProps;
export declare function initTable(props: SupabaseGridProps, state: InitialStateType, dispatch: (value: any) => void): void;
export declare function parseSupaTable(data: {
    table: Dictionary<any>;
    columns: Dictionary<any>[];
    primaryKeys: Dictionary<any>[];
    relationships: Dictionary<any>[];
}): SupaTable;
export declare function onLoadStorage(storageRef: string, tableName: string, schema?: string | null): any;
export declare const saveStorageDebounced: typeof saveStorage;
export declare function saveStorage(state: InitialStateType, storageRef: string): void;
