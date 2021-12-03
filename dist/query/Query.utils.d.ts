import { Dictionary, Filter, QueryPagination, QueryTable, Sort } from '../types';
export declare function countQuery(table: QueryTable, options?: {
    filters?: Filter[];
}): string;
export declare function deleteQuery(table: QueryTable, filters?: Filter[], options?: {
    returning?: boolean;
}): string;
export declare function insertQuery(table: QueryTable, values: Dictionary<any>[], options?: {
    returning?: boolean;
}): string;
export declare function selectQuery(table: QueryTable, columns?: string[], options?: {
    filters?: Filter[];
    pagination?: QueryPagination;
    sorts?: Sort[];
}): string;
export declare function updateQuery(table: QueryTable, value: Dictionary<any>, options?: {
    filters?: Filter[];
    returning?: boolean;
}): string;
