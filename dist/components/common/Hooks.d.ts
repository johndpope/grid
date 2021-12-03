/**
 * Hook for listening on key events.
 *
 * @param {Object|Map} keyMap       Key names mapped to event handlers. If a key name exists, its
 *                                  default behavior will be suppressed.
 * @param {Array} whitelistNodes    If target element is in the whitelist nodes array, will not
 *                                  trigger shortcut event
 * @param {Array} whitelistClasses  If target class is in the whitelist classes array, will not
 *                                  trigger shortcut event
 */
export declare function useKeyboardShortcuts(keyMap: {
    [id: string]: (event: KeyboardEvent) => void;
}, whitelistNodes?: string[], whitelistClasses?: string[]): void;
