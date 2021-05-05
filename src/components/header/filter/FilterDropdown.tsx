import * as React from 'react';
import { Dropdown, Button, IconPlus, Typography } from '@supabase/ui';
import { useDispatch, useTrackedState } from '../../../store';
import FilterRow from './FilterRow';

type FilterDropdownProps = {};

const FilterDropdown: React.FC<FilterDropdownProps> = p => {
  const state = useTrackedState();
  const btnText =
    state.filters.length > 0 ? `Filter ${state.filters.length}` : 'Filter';

  return (
    <Dropdown
      className="grid-w-96 grid-overflow-visible"
      placement="bottomLeft"
      overlay={<Filter {...p} />}
    >
      <Button
        type="outline"
        style={{ padding: '3px 10px', borderColor: '#333' }}
      >
        {btnText}
      </Button>
    </Dropdown>
  );
};
export default FilterDropdown;

const Filter: React.FC<FilterDropdownProps> = ({}) => {
  const state = useTrackedState();
  const dispatch = useDispatch();

  function onAddFilter() {
    dispatch({
      type: 'ADD_FILTER',
      payload: {
        clause: 'where',
        columnName: state.table?.columns[0].name,
        condition: 'eq',
        filterText: '',
      },
    });
  }

  return (
    <div className="grid-p-2">
      <div>
        {state.filters.map((_, index) => (
          <FilterRow key={`filter-${index}`} filterIdx={index} />
        ))}
        {state.filters.length == 0 && (
          <Typography.Text>No filters applied</Typography.Text>
        )}
      </div>
      <div className="grid-mt-2">
        <Button icon={<IconPlus />} onClick={onAddFilter}>
          Add filter
        </Button>
      </div>
    </div>
  );
};
