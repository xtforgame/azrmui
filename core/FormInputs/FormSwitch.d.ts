/// <reference types="react" />
import { FormControlLabelProps } from '@material-ui/core/FormControlLabel';
import { SwitchProps } from '@material-ui/core/Switch';
export declare type FormSwitchProps = SwitchProps & {
    label?: string;
    labelProps?: FormControlLabelProps;
};
declare const _default: (props: FormSwitchProps) => JSX.Element;
export default _default;
