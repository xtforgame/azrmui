/// <reference types="react" />
import { FormControlLabelProps } from '@material-ui/core/FormControlLabel';
import { CheckboxProps } from '@material-ui/core/Checkbox';
export declare type FormCheckboxProps = CheckboxProps & {
    label?: string;
    labelProps?: FormControlLabelProps;
};
declare const _default: (props: FormCheckboxProps) => JSX.Element;
export default _default;
