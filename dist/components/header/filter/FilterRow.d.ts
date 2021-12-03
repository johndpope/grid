import * as React from 'react';
/**
 * use `now` to trigger re-render as filterIdx won't change value
 * if not filterText state will not updated on delete filter
 */
declare type FilterRowProps = {
    filterIdx: number;
    now: number;
};
declare const _default: React.NamedExoticComponent<FilterRowProps>;
export default _default;
