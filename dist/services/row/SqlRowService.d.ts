import { IRowService } from '.';
import { Filter, ServiceError, Sort, SupaRow, SupaTable } from '../../types';
import Query from '../../query';
export declare class SqlRowService implements IRowService {
    protected table: SupaTable;
    protected onSqlQuery: (query: string) => Promise<{
        data?: any;
        error?: any;
    }>;
    protected onError: (error: any) => void;
    protected query: Query;
    constructor(table: SupaTable, onSqlQuery: (query: string) => Promise<{
        data?: any;
        error?: any;
    }>, onError: (error: any) => void);
    count(filters: Filter[]): Promise<{
        error: any;
        data?: undefined;
    } | {
        data: any;
        error?: undefined;
    }>;
    create(row: SupaRow): Promise<{
        error: {
            message: string;
        };
    }>;
    delete(rows: SupaRow[]): {
        error: ServiceError;
    } | {
        error?: undefined;
    };
    fetchPage(page: number, rowsPerPage: number, filters: Filter[], sorts: Sort[]): Promise<{
        data: {
            rows: any;
        };
    }>;
    update(row: SupaRow): {
        error: ServiceError;
    } | {
        error?: undefined;
    };
    getPrimaryKeys(): {
        primaryKeys?: string[];
        error?: ServiceError;
    };
    /**
     * temporary fix until we impliment a better filter UI
     * which validate input value base on the column type
     */
    formatFilterValue(filter: Filter): any;
}
