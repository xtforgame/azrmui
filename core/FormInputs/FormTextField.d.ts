import React from 'react';
import { TextFieldProps } from '@material-ui/core/TextField';
export declare type FormTextFieldProps = TextFieldProps & {
    onPressEnter?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onPressEnterCheckCondition?: (e: any) => boolean;
};
declare const _default: (props: FormTextFieldProps) => JSX.Element;
export default _default;
