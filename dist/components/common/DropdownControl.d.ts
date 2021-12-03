import * as React from 'react';
declare type DropdownControlProps = {
    options: {
        value: string | number;
        label: string;
    }[];
    onSelect: (value: string | number) => void;
    className?: string;
    side?: 'bottom' | 'left' | 'top' | 'right' | undefined;
    align?: 'start' | 'center' | 'end' | undefined;
    isNested?: boolean;
};
export declare const DropdownControl: React.FC<DropdownControlProps>;
export {};
