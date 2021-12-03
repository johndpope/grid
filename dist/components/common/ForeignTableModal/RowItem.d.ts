import * as React from 'react';
import { Dictionary } from '../../../types';
interface RowItemProps {
    item: Dictionary<any>;
    onSelect: (item: Dictionary<any>) => void;
}
export declare const RowItem: React.FC<RowItemProps>;
export {};
