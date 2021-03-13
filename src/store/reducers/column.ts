import update from 'immutability-helper';
import { Column } from '@phamhieu1998/react-data-grid';
import { getInitialGridColumns } from '../../utils';
import { INIT_ACTIONTYPE } from './base';

export interface ColumnInitialState {
  gridColumns: Column<any, any>[];
}

export const columnInitialState: ColumnInitialState = {
  gridColumns: [],
};

type COLUMN_ACTIONTYPE =
  | INIT_ACTIONTYPE
  | {
      type: 'MOVE_COLUMN';
      payload: { fromIndex: number; toIndex: number };
    };

const ColumnReducer = (
  state: ColumnInitialState,
  action: COLUMN_ACTIONTYPE
) => {
  switch (action.type) {
    case 'INIT_TABLE': {
      return {
        ...state,
        gridColumns: getInitialGridColumns(
          action.payload.gridColumns,
          action.payload.savedState
        ),
      };
    }
    case 'MOVE_COLUMN': {
      const moveItem = state.gridColumns[action.payload.fromIndex];
      return {
        ...state,
        gridColumns: update(state.gridColumns, {
          $splice: [
            [action.payload.fromIndex, 1],
            [action.payload.toIndex, 0, moveItem],
          ],
        }),
      };
    }
    default:
      return state;
  }
};

export default ColumnReducer;
