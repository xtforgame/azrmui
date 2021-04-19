import React from 'react';
import { NumberFormatProps } from 'react-number-format';
export declare type NumberFormatInputProps = NumberFormatProps & {
    inputRef?: ((el: HTMLInputElement) => void) | React.Ref<any>;
    onChange?: (e: any) => void;
};
declare const _default: (props: NumberFormatInputProps) => JSX.Element;
export default _default;
