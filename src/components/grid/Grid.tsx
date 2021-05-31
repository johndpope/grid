import * as React from 'react';
import { memo } from 'react-tracked';
import DataGrid, {
  DataGridHandle,
  RowsChangeData,
} from '@supabase/react-data-grid';
import { Typography, Loading } from '@supabase/ui';
import { GridProps, SupaRow } from '../../types';
import { useDispatch, useTrackedState } from '../../store';
import { useKeyboardShortcuts } from '../common';
import { METAKEY } from '../../utils';

export const Grid: React.FC<GridProps> = memo(
  ({ width, height, containerClass, gridClass, rowClass }) => {
    const gridRef = React.useRef<DataGridHandle>(null);
    const dispatch = useDispatch();
    const state = useTrackedState();
    // workaround to force state tracking on state.gridColumns
    const columnHeaders = state.gridColumns.map(x => `${x.key}_${x.frozen}`);
    const {
      gridColumns,
      rows,
      onError: onErrorFunc,
      onEditRow,
      selectedCellPosition,
    } = state;

    useKeyboardShortcuts(
      {
        [`${METAKEY}+e`]: event => {
          event.stopPropagation();
          if (onEditRow && selectedCellPosition) {
            const row = rows.find(x => x.idx == selectedCellPosition.rowIdx);
            if (row) onEditRow(row);
          }
        },
        [`${METAKEY}+Backspace`]: event => {
          event.stopPropagation();
          if (selectedCellPosition) {
            const row = rows.find(x => x.idx == selectedCellPosition.rowIdx);
            if (row) {
              state.rowService!.delete([row]);
              dispatch({
                type: 'REMOVE_ROWS',
                payload: { rowIdxs: [row.idx] },
              });
              dispatch({
                type: 'SELECTED_CELL_CHANGE',
                payload: { position: null },
              });
            }
          }
        },
        [`${METAKEY}+ArrowUp`]: event => {
          event.stopPropagation();
          if (selectedCellPosition) {
            const position = {
              idx: selectedCellPosition?.idx ?? 0,
              rowIdx: 0,
            };
            gridRef.current!.selectCell(position);
          } else {
            gridRef.current!.scrollToRow(Number(0));
          }
        },
        [`${METAKEY}+ArrowDown`]: event => {
          event.stopPropagation();
          if (selectedCellPosition) {
            const position = {
              idx: selectedCellPosition?.idx ?? 0,
              rowIdx: rows.length > 1 ? rows.length - 1 : 0,
            };
            gridRef.current!.selectCell(position);
          } else {
            gridRef.current!.scrollToRow(Number(rows.length));
          }
        },
        [`${METAKEY}+ArrowLeft`]: event => {
          event.stopPropagation();
          const fronzenColumns = gridColumns.filter(x => x.frozen);
          const position = {
            idx: fronzenColumns.length,
            rowIdx: selectedCellPosition?.rowIdx ?? 0,
          };
          gridRef.current!.selectCell(position);
        },
        [`${METAKEY}+ArrowRight`]: event => {
          event.stopPropagation();
          gridRef.current!.selectCell({
            idx: gridColumns.length - 1,
            rowIdx: selectedCellPosition?.rowIdx ?? 0,
          });
        },
      },
      ['INPUT', 'TEXTAREA'],
      ['rdg-editor-container']
    );

    function rowKeyGetter(row: SupaRow) {
      return row.idx;
    }

    function onColumnResized(index: number, width: number) {
      // selectColumn is considered as the first col
      const _index = index - 1;
      dispatch({
        type: 'UPDATE_COLUMN_SIZE',
        payload: { index: _index, width: Math.round(width) },
      });
    }

    function onRowsChange(
      rows: SupaRow[],
      data: RowsChangeData<SupaRow, unknown>
    ) {
      const rowData = rows[data.indexes[0]];
      const originRowData = state.rows.find(x => x.idx == rowData.idx);
      const hasChange =
        JSON.stringify(rowData) !== JSON.stringify(originRowData);
      if (hasChange) {
        const { error } = state.rowService!.update(rowData);
        if (error) {
          if (onErrorFunc) onErrorFunc(error);
        } else {
          dispatch({
            type: 'SET_ROWS',
            payload: { rows, totalRows: state.totalRows },
          });
        }
      }
    }

    function onSelectedRowsChange(selectedRows: Set<React.Key>) {
      dispatch({
        type: 'SELECTED_ROWS_CHANGE',
        payload: { selectedRows },
      });
    }

    function onSelectedCellChange(position: { idx: number; rowIdx: number }) {
      dispatch({
        type: 'SELECTED_CELL_CHANGE',
        payload: { position },
      });
    }

    if (!columnHeaders || columnHeaders.length == 0) {
      return (
        <div
          className="flex justify-center bg-gray-100 dark:bg-gray-900"
          style={{ width: width || '100%', height: height || '50vh' }}
        >
          <div className="flex items-center">
            <Loading active>
              <div />
            </Loading>
            <Typography.Text className="m-8">loading ...</Typography.Text>
          </div>
        </div>
      );
    }
    return (
      <div
        className={containerClass}
        style={{ width: width || '100%', height: height || '50vh' }}
      >
        <DataGrid
          ref={gridRef}
          columns={gridColumns}
          rows={rows}
          rowKeyGetter={rowKeyGetter}
          selectedRows={state.selectedRows}
          onColumnResized={onColumnResized}
          onRowsChange={onRowsChange}
          onSelectedCellChange={onSelectedCellChange}
          onSelectedRowsChange={onSelectedRowsChange}
          className={gridClass}
          rowClass={rowClass}
          style={{ height: '100%' }}
        />
      </div>
    );
  }
);
