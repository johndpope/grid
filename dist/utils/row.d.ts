import { InitialStateType } from '../store/reducers';
export declare function fetchCount(state: InitialStateType, dispatch: (value: unknown) => void): Promise<void>;
export declare function fetchPage(state: InitialStateType, dispatch: (value: unknown) => void): Promise<void>;
export declare const refreshPageDebounced: typeof fetchPage;
