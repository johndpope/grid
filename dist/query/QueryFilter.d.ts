import { Dictionary, Filter, FilterOperator, QueryTable, Sort } from '../types';
import { IQueryModifier, QueryModifier } from './QueryModifier';
export interface IQueryFilter {
    filter: (column: string, operator: FilterOperator, value: string) => IQueryFilter;
    match: (criteria: Dictionary<any>) => IQueryFilter;
    order: (column: string, ascending?: boolean, nullsFirst?: boolean) => IQueryFilter;
}
export declare class QueryFilter implements IQueryFilter, IQueryModifier {
    protected table: QueryTable;
    protected action: 'count' | 'delete' | 'insert' | 'select' | 'update';
    protected actionValue?: Dictionary<any> | string[] | Dictionary<any>[] | undefined;
    protected actionOptions?: {
        returning: boolean;
    } | undefined;
    protected filters: Filter[];
    protected sorts: Sort[];
    constructor(table: QueryTable, action: 'count' | 'delete' | 'insert' | 'select' | 'update', actionValue?: Dictionary<any> | string[] | Dictionary<any>[] | undefined, actionOptions?: {
        returning: boolean;
    } | undefined);
    filter(column: string, operator: FilterOperator, value: any): this;
    match(criteria: Dictionary<any>): this;
    order(column: string, ascending?: boolean, nullsFirst?: boolean): this;
    range(from: number, to: number): QueryModifier;
    toSql(): string;
    _getQueryModifier(): QueryModifier;
}
