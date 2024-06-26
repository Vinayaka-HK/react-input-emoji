export default TextInputWithRef;
export type Props = {
    onKeyDown: (event: React.KeyboardEvent) => void;
    onKeyUp: (event: React.KeyboardEvent) => void;
    onFocus: () => void;
    onBlur: () => void;
    onChange?: (sanitizedText: string) => void;
    onArrowUp: (event: React.KeyboardEvent) => void;
    onArrowDown: (event: React.KeyboardEvent) => void;
    onEnter: (event: React.KeyboardEvent) => void;
    shouldReturn: boolean;
    onCopy: (event: React.ClipboardEvent) => void;
    onPaste: (event: React.ClipboardEvent) => void;
    placeholder: string;
    style: {
        borderRadius?: number;
        color?: string;
        borderColor?: string;
        fontSize?: number;
        fontFamily?: string;
        background: string;
        placeholderColor?: string;
    };
    tabIndex: number;
    className: string;
};
export type Ref = {
    appendContent: (html: string) => void;
    html: string;
    text: string;
    size: {
        width: number;
        height: number;
    };
    focus: () => void;
};
declare const TextInputWithRef: React.ForwardRefExoticComponent<Props & React.RefAttributes<Ref>>;
import React from "react";
