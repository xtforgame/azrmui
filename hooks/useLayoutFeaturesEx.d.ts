import React from 'react';
declare const _default: (props: any) => {
    space: any;
    topSpace: any;
    Content: any;
    classesByNs: any;
    tData: any;
    host: {
        handleSubmit: () => {
            outputs: {
                [s: string]: any;
            };
            linker: import("../utils/InputLinker").IInputLinker<import("../utils/InputLinker").IFieldLink<unknown>>;
        } | null;
        props: {
            classesByNs: any;
            onSubmit?: import("./useLayoutFeatures").OnSubmitFunction<import("../utils/InputLinker").IInputLinker<import("../utils/InputLinker").IFieldLink<unknown>>> | undefined;
        };
    };
    il: import("../utils/InputLinker").IInputLinker<import("../utils/InputLinker").IFieldLink<unknown>>;
    setIl: React.Dispatch<React.SetStateAction<import("../utils/InputLinker").IInputLinker<import("../utils/InputLinker").IFieldLink<unknown>>>>;
    resetIl: import("../utils/InputLinker/core/useInputLinker").ResetLinkerFunction<import("../utils/InputLinker").IFieldLink<unknown>, import("../utils/InputLinker").IInputLinker<import("../utils/InputLinker").IFieldLink<unknown>>>;
};
export default _default;
