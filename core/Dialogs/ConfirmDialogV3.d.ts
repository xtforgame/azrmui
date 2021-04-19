import { ReactNode } from 'react';
import { DialogProps } from '@material-ui/core/Dialog';
export declare type FormCheckboxPropsBase = {
    title?: string;
    contents?: any;
    contentText?: string;
    fullScreen?: boolean;
    children?: ReactNode;
    onClose: Function;
    buttonComponents?: {
        yes?: any;
        confirm?: any;
        no?: any;
        cancel?: any;
    };
    buttonTexts?: {
        yes?: any;
        confirm?: any;
        no?: any;
        cancel?: any;
    };
};
export declare type FormCheckboxProps = FormCheckboxPropsBase & {
    dialogProps: DialogProps;
};
declare const _default: (props: FormCheckboxProps) => JSX.Element;
export default _default;
