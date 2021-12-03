import { Column } from '@supabase/react-data-grid';
import { SavedState } from '../types';
export declare function cloneColumn(column: Column<any, any>): any;
export declare function getInitialGridColumns(gridColumns: Column<any, any>[], savedState?: SavedState): Column<any, any>[];
