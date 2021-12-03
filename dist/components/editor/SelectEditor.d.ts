/// <reference types="react" />
import { EditorProps } from '@supabase/react-data-grid';
interface SelectEditorProps<TRow, TSummaryRow = unknown> extends EditorProps<TRow, TSummaryRow> {
    options: {
        label: string;
        value: string;
    }[];
}
export declare function SelectEditor<TRow, TSummaryRow = unknown>({ row, column, onRowChange, onClose, options, }: SelectEditorProps<TRow, TSummaryRow>): JSX.Element;
export {};
