import { SupaColumn, SupaRow } from '../types';
export declare function deepClone(obj: unknown): any;
export declare function exportRowsToCsv(columns: SupaColumn[], rows: SupaRow[], separator?: string): string;
export declare function formatClipboardValue(value: any): any;
