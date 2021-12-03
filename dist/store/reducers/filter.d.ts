import { Filter } from '../../types';
import { INIT_ACTIONTYPE } from './base';
export interface FilterInitialState {
    filters: Filter[];
}
export declare const filterInitialState: FilterInitialState;
declare type FILTER_ACTIONTYPE = INIT_ACTIONTYPE | {
    type: 'SET_FILTERS';
    payload: Filter[];
} | {
    type: 'ADD_FILTER';
    payload: Filter;
} | {
    type: 'REMOVE_FILTER';
    payload: {
        index: number;
    };
} | {
    type: 'UPDATE_FILTER';
    payload: {
        filterIdx: number;
        value: Filter;
    };
};
declare const FilterReducer: (state: FilterInitialState, action: FILTER_ACTIONTYPE) => any;
export default FilterReducer;
