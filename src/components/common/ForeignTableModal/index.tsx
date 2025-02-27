import * as React from 'react';
import {
  Button,
  Divider,
  Modal,
  Menu,
  Space,
  IconExternalLink,
  IconTrash,
} from '@supabase/ui';
import { useTrackedState } from '../../../store';
import { Dictionary, Filter } from '../../../types';
import { RowItem } from './RowItem';
import { FilterHeader } from './FilterHeader';
import Query from '../../../query';

type ForeignTableModalProps = {
  columnName?: string;
  defaultValue?: string;
  onChange: (value: any | null) => void;
};

export const ForeignTableModal: React.FC<ForeignTableModalProps> = ({
  columnName,
  defaultValue,
  onChange,
}) => {
  const [visible, setVisible] = React.useState(false);
  const [foreignColumnNames, setForeignColumnNames] = React.useState<string[]>(
    []
  );
  const [rows, setRows] = React.useState<Dictionary<any>[] | null>(null);
  const state = useTrackedState();
  const columnDefinition = state.table?.columns.find(
    (x) => x.name == columnName
  );

  React.useEffect(() => {
    if (!visible) return;

    fetchColumns();

    if (defaultValue && columnDefinition) {
      fetchData({
        column: columnDefinition.targetColumnName!,
        operator: '=',
        value: defaultValue,
      });
    } else {
      fetchData();
    }
  }, [visible]);

  async function fetchColumns() {
    if (
      !state.metaService ||
      !columnDefinition?.targetTableName ||
      !columnDefinition?.targetTableSchema
    )
      return;

    const { data } = await state.metaService.fetchColumns(
      columnDefinition?.targetTableName,
      columnDefinition?.targetTableSchema
    );
    if (data && data.length > 0) {
      const columnNames = data.map((x) => x.name);
      setForeignColumnNames(columnNames);
    }
  }

  async function fetchData(filter?: Filter) {
    if (!state.onSqlQuery || !columnDefinition?.targetTableName) return;

    const query = new Query();
    let queryChains = query
      .from(
        columnDefinition?.targetTableName,
        columnDefinition?.targetTableSchema ?? undefined
      )
      .select();

    if (filter && filter.value && filter.value != '') {
      const { column, operator, value } = filter;
      queryChains = queryChains.filter(column, operator, value);
    }

    // TODO: How to let users know that filter result limit at 20 results
    // should we allow a higher value?
    const sql = queryChains.range(0, 20).toSql();
    const { data, error } = await state.onSqlQuery(sql);
    if (error) {
      setRows(null);
    } else {
      setRows(data);
    }
  }

  function toggle(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if (event && event.stopPropagation) event.stopPropagation();
    setVisible(!visible);
  }

  function onItemSelect(item: Dictionary<any>) {
    if (item && columnDefinition && columnDefinition.targetColumnName) {
      const value = item[columnDefinition.targetColumnName];
      onChange(value);
    }

    setVisible(false);
  }

  function renderRows() {
    if (!rows) return null;
    const temp = rows.map((x, i) => {
      return <RowItem key={`menu-${i}`} item={x} onSelect={onItemSelect} />;
    });
    return <Menu className="foreign-table-modal__menu">{temp}</Menu>;
  }

  function onFilterChange(filter: Filter) {
    if (filter && filter.value && filter.value != '') fetchData(filter);
  }

  function onClearValueClick() {
    onChange(null);
    setVisible(false);
  }

  return (
    <>
      <Button
        type="text"
        onClick={toggle}
        icon={<IconExternalLink />}
        style={{ padding: '3px' }}
      />
      <Modal
        visible={visible}
        onCancel={toggle}
        closable
        contentStyle={{ padding: 0 }}
        customFooter={
          <Space style={{ width: '100%' }}>
            <Button
              block
              danger
              icon={<IconTrash />}
              onClick={onClearValueClick}
            >
              Clear value
            </Button>
          </Space>
        }
      >
        <FilterHeader
          defaultColumnName={columnDefinition?.targetColumnName ?? undefined}
          defaultValue={defaultValue}
          foreignColumnNames={foreignColumnNames}
          onChange={onFilterChange}
        />
        <div className="foreign-table-modal__content-container">
          <Divider light />
          <div className="foreign-table-modal__content-container__inner">
            <div
              className="foreign-table-modal__content-container__inner__overflow"
              style={{ minHeight: '21rem', maxHeight: '20rem' }}
            >
              {renderRows()}
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};
