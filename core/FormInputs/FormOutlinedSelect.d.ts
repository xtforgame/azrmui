/// <reference types="react" />
import { OutlinedInputProps } from '@material-ui/core/OutlinedInput';
import { InputLabelProps } from '@material-ui/core/InputLabel';
import { FormControlProps } from '@material-ui/core/FormControl';
import { FormHelperTextProps } from '@material-ui/core/FormHelperText';
import { SelectProps } from '@material-ui/core/Select';
export declare type MenuItemType = {
    key?: any;
    value: any;
    label: string;
};
export declare type FormSelectProps = SelectProps & {
    label?: string;
    helperText?: string;
    fullWidth?: boolean;
    formProps?: FormControlProps;
    labelProps?: InputLabelProps;
    helperTextProps?: FormHelperTextProps;
    inputProps?: OutlinedInputProps;
    items?: MenuItemType[];
    idKey?: string;
    valueKey?: string;
    labelKey?: string;
};
declare const _default: (props: FormSelectProps) => JSX.Element;
export default _default;
