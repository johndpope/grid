import * as React from 'react';
declare type MonacoEditorProps = {
    width?: string | number | undefined;
    height?: string | number | undefined;
    value?: string | undefined;
    language?: string | undefined;
    onChange: (value: string | undefined) => void;
    onMount?: (editor: any) => void;
};
export declare const MonacoEditor: React.FC<MonacoEditorProps>;
export {};
