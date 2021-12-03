import { Dictionary, Filter, QueryPagination, QueryTable, Sort } from '../types';
export interface IQueryModifier {
    range: (from: number, to: number) => QueryModifier;
    toSql: () => string;
}
export declare class QueryModifier implements IQueryModifier {
    protected table: QueryTable;
    protected action: 'count' | 'delete' | 'insert' | 'select' | 'update';
    protected options?: {
        actionValue?: string[] | Dictionary<any> | Dictionary<any>[] | undefined;
        actionOptions?: {
            returning: boolean;
        } | undefined;
        filters?: Filter[] | undefined;
        sorts?: Sort[] | undefined;
    } | undefined;
    protected pagination?: QueryPagination;
    constructor(table: QueryTable, action: 'count' | 'delete' | 'insert' | 'select' | 'update', options?: {
        actionValue?: string[] | Dictionary<any> | Dictionary<any>[] | undefined;
        actionOptions?: {
            returning: boolean;
        } | undefined;
        filters?: Filter[] | undefined;
        sorts?: Sort[] | undefined;
    } | undefined);
    /**
     * Limits the result to rows within the specified range, inclusive.
     *
     * @param from  The starting index from which to limit the result, inclusive.
     * @param to  The last index to which to limit the result, inclusive.
     */
    range(from: number, to: number): this;
    /**
     * Return SQL string for query chains
     */
    toSql(): string;
}
