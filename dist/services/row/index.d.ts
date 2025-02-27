import { Filter, ServiceError, Sort, SupaRow } from '../../types';
export interface IRowService {
    count: (filters: Filter[]) => Promise<{
        data?: number;
        error?: ServiceError;
    }>;
    create: (row: SupaRow) => Promise<{
        data?: SupaRow;
        error?: ServiceError;
    }>;
    fetchPage: (page: number, rowsPerPage: number, filters: Filter[], sorts: Sort[]) => Promise<{
        data?: {
            rows: SupaRow[];
        };
        error?: ServiceError;
    }>;
    /**
     * TODO: should return a promise.
     * We should show loading indicator when deleting rows (on row level).
     * Only remove rows from the grid when delete returns success result.
     * ---
     * Right now, we remove rows immediately, so it's confused when delete operation fails
     * and rows are already removed from the grid
     */
    delete: (rows: SupaRow[]) => {
        error?: ServiceError;
    };
    update: (row: SupaRow) => {
        error?: ServiceError;
    };
}
export * from './SqlRowService';
