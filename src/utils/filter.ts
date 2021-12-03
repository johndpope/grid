import { Filter, SavedState, SupaTable } from '../types';

export function getInitialFilters(
  table: SupaTable,
  savedState?: SavedState
): Filter[] {
  if (savedState?.filters) {
    // verify column still exists
    console.log("⛳️  savedState?.filters!!!",savedState?.filters);
    const filters = savedState.filters.filter((x) => {
      const found = table.columns.find((y) => y.name === x.column);
      return found ? true : false;
    });
    if (filters?.length > 0) return filters;
  }else{
    console.log("⛳️  no.filters!!!");
  }
  return [];
}
