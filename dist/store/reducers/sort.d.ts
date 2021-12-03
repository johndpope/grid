import { Sort } from '../../types';
import { INIT_ACTIONTYPE } from './base';
export interface SortInitialState {
    sorts: Sort[];
}
export declare const sortInitialState: SortInitialState;
declare type SORT_ACTIONTYPE = INIT_ACTIONTYPE | {
    type: 'SET_SORTS';
    payload: Sort[];
} | {
    type: 'ADD_SORT';
    payload: Sort;
} | {
    type: 'REMOVE_SORT';
    payload: {
        column: string;
    };
} | {
    type: 'UPDATE_SORT';
    payload: Sort;
} | {
    type: 'MOVE_SORT';
    payload: {
        fromIndex: number;
        toIndex: number;
    };
};
declare const SortReducer: (state: SortInitialState, action: SORT_ACTIONTYPE) => SortInitialState | {
    sorts: Sort[];
    refreshPageFlag: number;
};
export default SortReducer;
