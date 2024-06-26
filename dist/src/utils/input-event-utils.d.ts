/**
 * Handle copy of current selected text
 * @param {React.ClipboardEvent} event
 */
export function handleCopy(event: React.ClipboardEvent): void;
/**
 * Caches the current text selection range
 */
export function cacheCurrentRange(): void;
/**
 * Clears the cached text selection range
 */
export function cleanCurrentRange(): void;
/**
 * @param {string} html - HTML string to be pasted at the caret position
 */
export function handlePasteHtmlAtCaret(html: string): void;
/**
 * Handle past on input
 * @param {React.ClipboardEvent} event
 */
export function handlePaste(event: React.ClipboardEvent): void;
/**
 * @typedef {object} HandleKeyDownOptions
 * @property {HTMLDivElement} placeholderEl
 * @property {number} maxLength
 * @property {HTMLDivElement} inputEl
 * @property {React.MutableRefObject<string>} cleanedTextRef
 * @property {React.MutableRefObject<HTMLDivElement>} textInputRef
 * @property {boolean} cleanOnEnter
 * @property {function(): void} emitChange
 * @property {(function(string): void)=} onEnter
 * @property {(function(KeyboardEvent): void)=} onKeyDown
 * @property {(function(string): void)} updateHTML
 */
/**
 * @typedef {Object} HandleSelectEmojiProps
 * @property {import("../types/types").EmojiMartItem} emoji
 * @property {React.MutableRefObject<import('../text-input').Ref>} textInputRef
 * @property {boolean} keepOpened
 * @property {() => void} toggleShowPicker
 * @property {number=} maxLength
 */
/**
 *
 * @param {HandleSelectEmojiProps} props
 */
export function handleSelectEmoji({ emoji, textInputRef, keepOpened, toggleShowPicker, maxLength, }: HandleSelectEmojiProps): void;
/**
 *
 * @param {{text: string, html: string}} props
 * @return {number}
 */
export function totalCharacters({ text, html }: {
    text: string;
    html: string;
}): number;
/**
 * Handle keyup event
 * @param {() => void} emitChange
 * @param {(event: KeyboardEvent) => void} onKeyDownMention
 * @param {React.MutableRefObject<string>} cleanedTextRef
 * @param {React.MutableRefObject<HTMLDivElement>} textInputRef
 * @return {(event: KeyboardEvent) => void}
 */
export function handleKeyup(emitChange: () => void, onKeyDownMention: (event: KeyboardEvent) => void, cleanedTextRef: React.MutableRefObject<string>, textInputRef: React.MutableRefObject<HTMLDivElement>): (event: KeyboardEvent) => void;
/**
 * Handle focus event
 * @param {function(FocusEvent): void} onFocus
 * @return {function(FocusEvent): void}
 */
export function handleFocus(onFocus: (arg0: FocusEvent) => void): (arg0: FocusEvent) => void;
/**
 * Set caret to the end of text value
 * @param {React.MutableRefObject<HTMLDivElement| null>} input
 */
export function moveCaretToEnd(input: React.MutableRefObject<HTMLDivElement | null>): void;
/**
 *
 * @param {HTMLDivElement} inputDiv
 * @return {string}
 */
export function removeHtmlExceptBr(inputDiv: HTMLDivElement): string;
/**
 *
 * @param {*} range
 * @returns
 */
export function getSelectionStart(range: any): {
    node: any;
    offset: any;
};
/**
 *
 * @return {Object} cursor
 */
export function getCursor(): any;
/**
 *
 */
export function addLineBreak(): void;
export type HandleKeyDownOptions = {
    placeholderEl: HTMLDivElement;
    maxLength: number;
    inputEl: HTMLDivElement;
    cleanedTextRef: React.MutableRefObject<string>;
    textInputRef: React.MutableRefObject<HTMLDivElement>;
    cleanOnEnter: boolean;
    emitChange: () => void;
    onEnter?: ((arg0: string) => void) | undefined;
    onKeyDown?: ((arg0: KeyboardEvent) => void) | undefined;
    updateHTML: ((arg0: string) => void);
};
export type HandleSelectEmojiProps = {
    emoji: import("../types/types").EmojiMartItem;
    textInputRef: React.MutableRefObject<import('../text-input').Ref>;
    keepOpened: boolean;
    toggleShowPicker: () => void;
    maxLength?: number | undefined;
};
