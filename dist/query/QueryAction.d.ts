import { Dictionary, QueryTable } from '../types';
import { IQueryFilter, QueryFilter } from './QueryFilter';
export interface IQueryAction {
    count: () => IQueryFilter;
    delete: (options?: {
        returning: boolean;
    }) => IQueryFilter;
    insert: (values: Dictionary<any> | Dictionary<any>[], options?: {
        returning: boolean;
    }) => IQueryFilter;
    select: (columns?: string[]) => IQueryFilter;
    update: (value: Dictionary<any>, options?: {
        returning: boolean;
    }) => IQueryFilter;
}
export declare class QueryAction implements IQueryAction {
    protected table: QueryTable;
    constructor(table: QueryTable);
    /**
     * Performs a COUNT on the table.
     */
    count(): QueryFilter;
    /**
     * Performs a DELETE on the table.
     *
     * @param options.returning  If `true`, return the deleted row(s) in the response.
     */
    delete(options?: {
        returning: boolean;
    }): QueryFilter;
    /**
     * Performs an INSERT into the table.
     *
     * @param values             The values to insert.
     * @param options.returning  If `true`, return the inserted row(s) in the response.
     */
    insert(values: Dictionary<any>[], options?: {
        returning: boolean;
    }): QueryFilter;
    /**
     * Performs vertical filtering with SELECT.
     *
     * @param columns the query columns, by default set to '*'.
     */
    select(columns?: string[]): QueryFilter;
    /**
     * Performs an UPDATE on the table.
     *
     * @param value  The value to update.
     * @param options.returning  If `true`, return the updated row(s) in the response.
     */
    update(value: Dictionary<any>, options?: {
        returning: boolean;
    }): QueryFilter;
}
