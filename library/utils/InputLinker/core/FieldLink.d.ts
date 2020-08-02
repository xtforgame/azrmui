import { RawEventArgs, IFieldLink, FieldProps, ValueProxy, ValueProxyClass, IInputLinker, FieldObjectConfig, Converter, LinkInfoBasic, ICtx, PreRenderCtx, RenderCtx, LinkMiddleware, InputOnChange, OnValidateErrorFunction, MergeChildrenFunction, ValidateFunction, IBasicFieldLink, ValidateResult } from './interfaces';
export default class FieldLink implements IFieldLink<FieldLink> {
    linker: IInputLinker<FieldLink>;
    config: FieldObjectConfig<FieldLink>;
    childLinks: any[];
    childElements: any[];
    namespace: string;
    name: string;
    uniqueName: string;
    key: string;
    defaultValue: any;
    component: any;
    shouldRender: boolean;
    ignoredFromOutputs: boolean;
    _mergeChildren: MergeChildrenFunction<FieldLink>;
    options: any;
    dirty: boolean;
    converter: Converter<FieldLink>;
    _validate: ValidateFunction<FieldLink>;
    props: FieldProps;
    data: any;
    _renderMiddlewares: LinkMiddleware<RenderCtx<FieldLink>>[];
    _preRenderMiddlewares: LinkMiddleware<PreRenderCtx<FieldLink>>[];
    onChange: InputOnChange<FieldLink>;
    onValidateError: OnValidateErrorFunction<FieldLink>;
    StateProxy: ValueProxyClass;
    valueProxy: ValueProxy;
    errorProxy: ValueProxy;
    customStateProxy: ValueProxy;
    proxies: {
        [s: string]: ValueProxy;
    };
    getNormalizedValue: () => any;
    getOutput: () => any;
    getViewValue: () => any;
    validate: () => ValidateResult;
    constructor(linker: IInputLinker<FieldLink>, config: FieldObjectConfig<FieldLink>);
    getValue: () => any;
    setValue: (value: any, rawArgs: RawEventArgs, clearError?: boolean) => void;
    getCustomState: () => any;
    setCustomState: (value: any, rawArgs: RawEventArgs) => void;
    getError: () => any;
    setError: (value: any, rawArgs: RawEventArgs) => void;
    addChildLink(...children: any[]): void;
    addChildElement(...children: any[]): void;
    mergeChildren: (children1: any[], children2: any[], extraLinkInfo: any) => any[] | undefined;
    _changeValue: (getValue: (rawArgs: RawEventArgs, linkInfo: LinkInfoBasic<FieldLink>) => any, rawArgs: RawEventArgs) => void;
    changeValue: (value: any, rawArgs: RawEventArgs) => void;
    handleChange: (...rawArgs: any[]) => void;
    handleExtraChildren: (props: FieldProps) => FieldProps;
    runMiddlewares: <Ctx extends ICtx>(c: Ctx, middlewares: LinkMiddleware<Ctx>[]) => Ctx;
    runPreRenderMiddlewares: <FieldLink_1 extends IBasicFieldLink>(ctx: PreRenderCtx<FieldLink_1>, middlewares?: LinkMiddleware<PreRenderCtx<FieldLink_1>>[] | undefined) => PreRenderCtx<FieldLink_1>;
    runRenderMiddlewares: <FieldLink_1 extends IBasicFieldLink>(ctx: RenderCtx<FieldLink_1>, middlewares?: LinkMiddleware<RenderCtx<FieldLink_1>>[] | undefined) => RenderCtx<FieldLink_1>;
    get host(): any;
    get hostProps(): any;
}