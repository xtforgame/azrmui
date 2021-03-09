import React from 'react';
import { IFieldLink, IInputLinker } from '~/utils/InputLinker/core/interfaces';
import { JsonFormProps } from './interfaces';
import { RenderSession } from './core';
declare const _default: <FieldLink extends IFieldLink<FieldLink>, LinkerType extends IInputLinker<FieldLink>>(p: JsonFormProps<FieldLink, LinkerType>) => {
    renderSpace: (fieldLink: FieldLink) => JSX.Element;
    renderSession: RenderSession<FieldLink, LinkerType>;
    props: JsonFormProps<FieldLink, LinkerType>;
    host: {
        handleSubmit: () => {
            outputs: {
                [s: string]: any;
            };
            linker: LinkerType;
        } | null;
        props: {
            classesByNs: any;
            onSubmit?: import("../../hooks/useLayoutFeatures").OnSubmitFunction<LinkerType> | undefined;
        };
    };
    il: LinkerType;
    layoutFeature: {
        classesByNs: any;
        tData: any;
        host: {
            handleSubmit: () => {
                outputs: {
                    [s: string]: any;
                };
                linker: LinkerType;
            } | null;
            props: {
                classesByNs: any;
                onSubmit?: import("../../hooks/useLayoutFeatures").OnSubmitFunction<LinkerType> | undefined;
            };
        };
        il: LinkerType;
        setIl: React.Dispatch<React.SetStateAction<LinkerType>>;
    };
};
export default _default;
