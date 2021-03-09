import React from 'react';
import EditorJS, { EditorConfig, OutputData, API } from '@editorjs/editorjs';
export interface WrapperProps extends EditorConfig {
    reinitOnPropsChange?: boolean;
    onData?: (data: OutputData) => void;
}
export declare class EditorWrapper extends React.PureComponent<WrapperProps> {
    /**
     * Editor instance
     */
    editor: EditorJS;
    /**
     * Node to append ref
     */
    private node;
    componentDidMount(): void;
    componentDidUpdate(): Promise<void>;
    componentWillUnmount(): void;
    initEditor(): Promise<void>;
    handleChange: (api: API) => Promise<void>;
    emitDataEvent: (cb: (data: OutputData) => void) => Promise<void>;
    removeEditor: () => Promise<boolean>;
    getHolderNode: () => HTMLDivElement;
    render(): JSX.Element | null;
}
export default EditorWrapper;
