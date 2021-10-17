/// <reference types="react" />
import { Cancel } from './useDialogState';
export { Cancel, };
declare const _default: ({ open, close, exited, dialogProps: dp, buttonProps: bp, }: {
    open: any;
    close: any;
    exited: any;
    dialogProps?: {} | undefined;
    buttonProps?: {} | undefined;
}) => ({
    buttonProps: {
        onClick: ((...args: any[]) => void) | undefined;
        onKeyDown: ((...args: any[]) => void) | undefined;
    };
    open: boolean;
    exited: boolean;
    dialogProps: any;
    setOpen?: undefined;
    setExited?: undefined;
    handleOpen?: undefined;
    handleClose?: undefined;
    handleExited?: undefined;
} | {
    buttonProps: {
        onClick: ((...args: any[]) => void) | undefined;
        onKeyDown: ((...args: any[]) => void) | undefined;
    };
    setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setExited: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    handleOpen: (...args: any[]) => void;
    handleClose: (...args: any[]) => void;
    handleExited: () => void;
    open?: undefined;
    exited?: undefined;
    dialogProps?: undefined;
} | {
    setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>> | undefined;
    setExited: import("react").Dispatch<import("react").SetStateAction<boolean>> | undefined;
    handleOpen: ((...args: any[]) => void) | undefined;
    handleClose: ((...args: any[]) => void) | undefined;
    handleExited: (() => void) | undefined;
})[];
export default _default;
