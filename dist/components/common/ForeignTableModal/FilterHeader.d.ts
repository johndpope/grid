import { FC } from 'react';
import { Filter } from '../../../types';
interface FilterProps {
    defaultColumnName?: string;
    defaultValue?: string;
    foreignColumnNames: string[];
    onChange: (value: Filter) => void;
}
export declare const FilterHeader: FC<FilterProps>;
export {};
