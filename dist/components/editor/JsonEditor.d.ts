/// <reference types="react" />
import { EditorProps } from '@supabase/react-data-grid';
export declare function JsonEditor<TRow, TSummaryRow = unknown>({ row, column, onRowChange, }: EditorProps<TRow, TSummaryRow>): JSX.Element;
export declare const prettifyJSON: (value: string) => string;
export declare const minifyJSON: (value: string) => string;
export declare const verifyJSON: (value: string) => boolean;
