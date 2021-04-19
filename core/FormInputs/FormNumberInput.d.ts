/// <reference types="react" />
import { FormTextFieldProps } from './FormTextField';
import { NumberFormatInputProps } from './NumberFormatInput';
export declare type FormNumberInputProps = FormTextFieldProps & {
    currency?: boolean;
    inputProps?: NumberFormatInputProps;
    thousandSeparator?: (e: any) => boolean;
};
declare const _default: (props: FormNumberInputProps) => JSX.Element;
export default _default;
