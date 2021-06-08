/// <reference types="react" />
export declare const Cancel: unique symbol;
export declare type UseDialogStatePrpos = {
    open?: (...any: any[]) => boolean | void;
    close?: (...any: any[]) => boolean | void;
    exited?: (...any: any[]) => boolean | void;
    dialogProps?: any;
};
declare const _default: ({ open: openFunc, close: closeFunc, exited: exitedFunc, dialogProps: dp, }: UseDialogStatePrpos) => ({
    open: boolean;
    exited: boolean;
    dialogProps: any;
    setOpen?: undefined;
    setExited?: undefined;
    handleOpen?: undefined;
    handleClose?: undefined;
    handleExited?: undefined;
} | {
    setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    setExited: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    handleOpen: (...args: any[]) => void;
    handleClose: (...args: any[]) => void;
    handleExited: () => void;
    open?: undefined;
    exited?: undefined;
    dialogProps?: undefined;
})[];
export default _default;
