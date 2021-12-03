import { SupaTable } from '../types';
export declare function getGridColumns(table: SupaTable, options?: {
    editable?: boolean;
    defaultWidth?: string | number;
    onAddColumn?: () => void;
}): any[];
