/**
 * @typedef {import('../types/types').SanitizeFn} SanitizeFn
 */
/**
 * @param {boolean} shouldReturn
 * @param {boolean} shouldConvertEmojiToImage
 */
export function useSanitize(shouldReturn: boolean, shouldConvertEmojiToImage: boolean): {
    addSanitizeFn: (fn: SanitizeFn) => void;
    sanitize: (html: string) => string;
    sanitizedTextRef: import("react").MutableRefObject<string>;
};
/**
 *
 * @param {string} html
 * @param {boolean} shouldReturn
 * @return {string}
 */
export function replaceAllHtmlToString(html: string, shouldReturn: boolean): string;
export type SanitizeFn = import('../types/types').SanitizeFn;
