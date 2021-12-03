import { IMetaService } from '.';
export declare class SqlMetaService implements IMetaService {
    protected onSqlQuery: (query: string) => Promise<{
        data?: any;
        error?: any;
    }>;
    constructor(onSqlQuery: (query: string) => Promise<{
        data?: any;
        error?: any;
    }>);
    fetchInfo(name: string, schema?: string | undefined): Promise<{
        error: any;
        data?: undefined;
    } | {
        data: any;
        error?: undefined;
    }>;
    fetchColumns(name: string, schema?: string | undefined): Promise<{
        error: any;
        data?: undefined;
    } | {
        data: any;
        error?: undefined;
    }>;
    fetchPrimaryKeys(name: string, schema?: string | undefined): Promise<{
        error: any;
        data?: undefined;
    } | {
        data: any;
        error?: undefined;
    }>;
    fetchRelationships(name: string, schema?: string | undefined): Promise<{
        error: any;
        data?: undefined;
    } | {
        data: any;
        error?: undefined;
    }>;
}
