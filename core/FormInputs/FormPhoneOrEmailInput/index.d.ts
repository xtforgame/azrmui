/// <reference types="react" />
import { isValidEmail } from '~/common/utils/validators';
import { FormTextFieldProps } from '../FormTextField';
export declare const isValidPhoneNumber: (value: any) => any;
export { isValidEmail };
export declare type FormPhoneOrEmailInputState = {
    rawInput: any;
    value: string | undefined;
    regionCode: string | undefined;
    type: string | undefined;
};
export declare type FormPhoneOrEmailInputProps = FormTextFieldProps & {
    enablePhone?: boolean;
    enableEmail?: boolean;
    normalizeOnMounted?: boolean;
    onChange?: (state: FormPhoneOrEmailInputState) => any;
};
declare const _default: (props: FormPhoneOrEmailInputProps) => JSX.Element;
export default _default;
