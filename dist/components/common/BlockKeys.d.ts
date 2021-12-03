import * as React from 'react';
declare type BlockKeysProps = {
    onEscape?: (value: string | null) => void;
    onEnter?: (value: string | null) => void;
    value: string | null;
};
/**
 * Blocks key events from propagating
 * We use this with cell editor to allow editor component to handle keys.
 * Example: press enter to add newline on textEditor
 */
export declare const BlockKeys: React.FC<BlockKeysProps>;
export {};
