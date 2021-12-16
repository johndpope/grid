import { postAndWait } from './grid.utils';
import DatePicker from 'react-datepicker';
import React from 'react';
import { SupabaseGrid, SupabaseGridRef, SupaRow, Filter, FilterOperator } from '@supabase/grid';


export default function Grid() {
  const [startDate, setStartDate] = React.useState<Date>(new Date()) // Date
  const [endDate, setEndDate] = React.useState<Date>(new Date()) // Date

  const gridRef = React.useRef<SupabaseGridRef>(null);
  const [tableInput, setTableInput] = React.useState('transactions');
  const [schemaInput, setSchemaInput] = React.useState('public');
  const [table, setTable] = React.useState({
    name: 'transactions',
    schema: 'public',
  });
  const [uiMode, setUiMode] = React.useState<'dark' | 'light' | undefined>(
    undefined
  );
  const [isReadonly, setReadonly] = React.useState(true);
  const [reload, setReload] = React.useState(false);
  var testFilters: Filter[] = [];



  function onReadonlyInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setReadonly(e.target.checked);
    // force reload grid
    reloadGrid();
  }

  function debugGrid() {
    console.log("1 gridReg:", gridRef);
    if (gridRef.current) {
      let filters: Filter[] = gridRef.current.getTheFilters();
      console.log("filters:", filters);


      for (var f in filters) {
        if (filters[0]["column"] == 'account_id') {
          return
        }
      }
    }

    var test = filter('account_id', '=', '254');
    if (gridRef.current) gridRef.current.addFilter(test[0]);
    // if (gridRef.current) gridRef.current.rowAdded({});


  }
  function onRowAdded() {
    if (gridRef.current) gridRef.current.rowAdded({});
  }

  function onToggleDarkMode() {
    let mode = '';
    if (uiMode != 'dark') mode = 'dark';

    setUiMode(mode == 'dark' ? 'dark' : undefined);
    document.body.className = mode;
  }

  function reloadGrid() {
    if (tableInput !== table.name || schemaInput !== table.schema) {
      setTable({ name: tableInput, schema: schemaInput });
    } else {
      setReload(true);
      setTimeout(() => {
        setReload(false);
      }, 300);
    }
  }

  function filter(column: string, operator: FilterOperator, value: string) {
    var filters: Filter[] = [];
    filters.push({ column, operator, value });
    return filters
  }

  function onStartDateChange(date: Date) {
    setStartDate(date);
    var test = filter('date', '>', date.toISOString());
    if (gridRef.current) gridRef.current.addFilter(test[0]);
  }

  function onEndDateChange(date: Date) {
    setEndDate(date);
    var test = filter('date', '<=', date.toISOString());
    if (gridRef.current) gridRef.current.addFilter(test[0]);
  }
  React.useEffect(() => {

    if (uiMode == 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [uiMode]);

  return (
    <div className="main-container">
      <div className="tool-bar">
        <DatePicker selected={startDate}
          onChange={(date: Date) => onStartDateChange(date)}
        />
        <DatePicker selected={endDate}
          onChange={(date: Date) => onEndDateChange(date)}
        />
      </div>
      {!reload && (


        <div className="grid-container">
          <SupabaseGrid
            ref={gridRef}
            table={table.name}
            schema={table.schema}
            filters={testFilters}
            editable={!isReadonly}

            storageRef="dqofwyqljsmbgrubmnzk"
            theme={uiMode}
            gridProps={{ height: '100%' }}

            onError={(error) => {
              console.log('ERROR: ', error);
            }}
            onAddColumn={() => {
              console.log('add new column');
            }}
            onEditColumn={(columnName) => {
              console.log('edit column: ', columnName);
            }}
            onDeleteColumn={(columnName) => {
              console.log('delete column: ', columnName);
            }}
            onAddRow={() => {
              console.log('add new row');
              return {};
            }}
            onEditRow={(row: SupaRow) => {
              console.log('edit row: ', row.idx);
            }}
            onSqlQuery={async (query: string) => {
              console.log('query:', query);

              // console.log('SupabaseGrid.propTypes:',SupabaseGrid.propTypes);
              // console.log('SupabaseGrid.props:',this.prop);

              // var strQuery = "select count(*) from public.transactions where account_id = 258;";;
              console.log("gridProps:", self);
              // if (query.includes("select * from public.transactions order by id asc nulls last limit 100 offset 0;")){
              //   query = "select * from public.transactions where account_id = 258 order by id asc nulls last limit 100 offset 0; "
              // }
              const res = await postAndWait('/api/sql-query', { query });
              console.log("res:", res);
              return res;
            }}
            headerActions={
              <>
                {/* <span>{`'{headerActions}' can be used to insert`}</span>,
                <button>SAVE CSV HERE</button>, */}
              </>
            }
          />
        </div>
      )}
    </div>
  );
}
