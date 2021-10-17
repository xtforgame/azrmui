export declare type ArgumentTypes<T> = T extends (...args: infer U) => infer R ? U : never;
export declare type ReturnType<T> = T extends (...args: infer U) => infer R ? R : never;
export declare type ReplaceReturnType<T, TNewReturn> = (...a: ArgumentTypes<T>) => TNewReturn;
export declare type WithOptional = ReplaceReturnType<(n?: number) => string, Promise<string>>;
export declare type OmitNever<T> = Pick<T, {
    [P in keyof T]: T[P] extends never ? never : P;
}[keyof T]>;
export declare type Overwrite<T, U> = Pick<T, Exclude<keyof T, keyof U>> & U;
export declare type Override<T, R> = Omit<T, keyof R> & R;
export declare type GetConstructorArgs<T> = T extends new (...args: infer U) => any ? U : never;
export interface Constructor<T> {
    new (...args: any[]): T;
}
export interface ConstructorWithFunction<T, ConstructorFunction> {
    new (...args: ArgumentTypes<ConstructorFunction>): T;
}
export declare type Cons<H, T extends readonly any[]> = ((head: H, ...tail: T) => void) extends ((...cons: infer R) => void) ? R : never;
export declare type Push<T extends readonly any[], V> = T extends any ? Cons<void, T> extends infer U ? {
    [K in keyof U]: K extends keyof T ? T[K] : V;
} : never : never;
export declare type AddArgument<F, Arg> = F extends ((...args: infer PrevArgs) => infer R) ? (...args: Push<PrevArgs, Arg>) => R : never;
export declare type ToPromiseFunction<T> = (_: any, value: T, index: number, array: T[]) => any;
export declare function defaultToPromiseFunc<T>(_: any, value: T, index: number, array: T[]): Promise<T>;
export declare function toSeqPromise<T>(inArray: T[], toPrmiseFunc?: ToPromiseFunction<T>): Promise<void>;
export declare function promiseReduce<T>(inArray: T[], toPrmiseFunc: ToPromiseFunction<T> | undefined, startValue: any): Promise<any>;
export declare function promiseWait(waitMillisec: any): Promise<unknown>;
export declare function toMap<T1, T2 = T1>(inArray: T1[], getId: (t: T1, i: number, array: T1[]) => any, trans?: (t: T1, i: number, array: T1[]) => T2): {
    [s: string]: T2;
};
declare const defaultCallbackPromise: ({ result, error }: {
    result: any;
    error: any;
}) => Promise<any>;
declare function isFunction(object: any): boolean;
declare function isFunctionV2(object: any): boolean;
declare const lowerTheFirstLetter: (str: any) => any;
declare const toCamel: (str: any) => any;
declare const toUnderscore: (str: any) => any;
declare const toDashed: (str: any) => any;
declare const capitalizeFirstLetter: (str: any) => any;
declare const toSafename: (str: any) => any;
declare const toCurrency: (number: any) => any;
declare const toFloatCurrency: (v: any, d?: number) => string;
declare const leftJustify: (s: any, length: any, char: any) => string;
declare const rightJustify: (s: any, length: any, char: any) => string;
export { lowerTheFirstLetter, toDashed, toSafename, toCamel, toUnderscore, capitalizeFirstLetter, toCurrency, toFloatCurrency, defaultCallbackPromise, isFunction, isFunctionV2, leftJustify, rightJustify, };
