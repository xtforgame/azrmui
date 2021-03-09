import { StateMode, IlHost, ProxyAndSliceName, IlPresetMap, IFieldLinkClass, IFieldLink, FieldValue, RawEventArgs, OnFieldValueChangeLinkInfo, RenderCtx, PreRenderCtx, FieldConfig, FieldObjectConfig, ProxyTypeName, PendingChanges, ConfigWithLastQueue, ValidateResult, LinkerNamespace, PendingChange } from './interfaces';
export default class InputLinker<FieldLink extends IFieldLink<FieldLink>> {
    host: any;
    options: any;
    stateMode: StateMode;
    namespace: LinkerNamespace;
    proxyAndSliceNames: ProxyAndSliceName[];
    sliceNameInState: {
        [s: string]: any;
    };
    presets: IlPresetMap<FieldLink>;
    ignoredUndefinedFromOutputs: boolean;
    FieldLink: IFieldLinkClass;
    fieldLinks: FieldLink[];
    fieldMap: {
        [s: string]: FieldLink;
    };
    _idCounter: number;
    _pendingChanges: PendingChanges<FieldLink>;
    customData: any;
    constructor(host: any, options?: any);
    get hostProps(): any;
    resetDirtyFlags: (flag?: boolean | undefined) => void;
    onFieldValueChange: (field: FieldLink, value: any, rawArgs: RawEventArgs, linkInfo: OnFieldValueChangeLinkInfo<FieldLink>) => void;
    addPendingChange: (cb: Function, change: PendingChange<FieldLink>) => void;
    resolvePendingChanges: () => void;
    getUniqueName: () => string;
    getPreset: (preset: import("./interfaces").ConfigPreset<FieldObjectConfig<FieldLink>>) => import("./interfaces").FinalFieldConfig<FieldObjectConfig<FieldLink>>;
    evaluateConfig: ({ config: currentCfg, lastQueue, }: ConfigWithLastQueue<FieldLink>, c: import("./interfaces").FinalFieldConfig<FieldObjectConfig<FieldLink>>) => ConfigWithLastQueue<FieldLink>;
    _add(configs: FieldConfig<FieldLink>[]): FieldLink[];
    add(...configs: FieldConfig<FieldLink>[]): FieldLink[];
    setDefaultValues(defaultValues: {
        [s: string]: FieldValue;
    }): void;
    getField: (fieldName: string) => FieldLink;
    getFields: () => {
        [s: string]: FieldLink;
    };
    getValue: (fieldName: string) => any;
    getNormalizedValue: (fieldName: string) => any;
    getValues: () => any;
    getNormalizedValues: () => any;
    getOutput: (fieldName: string) => any;
    getOutputs: () => any;
    getDataFromSlice: (sliceName: ProxyTypeName, state?: any) => any;
    getDataFromSliceByName: (sliceName: ProxyTypeName, fieldName: string, state?: any) => any;
    changeValue: (fieldName: string, value: any) => void;
    changeValues: (changeMap: {
        [s: string]: any;
    }) => void;
    validate(keepErrors?: boolean): ValidateResult;
    getErrorStatus: (fieldName: string) => {
        validateError: any;
    };
    _renderPass: (fieldName: string, ctx: PreRenderCtx<FieldLink>, options: {} | undefined, ignoreKeyProp: boolean) => RenderCtx<FieldLink>;
    renderProps: (fieldName: string, options?: {}) => import("./interfaces").FieldProps;
    renderComponent: (fieldName: string, options?: any) => JSX.Element | undefined;
    mergeInitState(state?: any): any;
    updateHost(host: IlHost): void;
}
