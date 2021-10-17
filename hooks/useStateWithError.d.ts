import { SetStateAction } from 'react';
export declare const Cancel: unique symbol;
export declare type ResultType<S> = [S, (value: SetStateAction<S>, clearError?: boolean) => void, string, (value: SetStateAction<string>) => void];
export declare type UseStateWithErrorOptions<S> = {
    onSetState?: (newState: SetStateAction<S>) => boolean | void;
    onSetError?: (error: SetStateAction<string>, isReseting: boolean) => boolean | void;
};
export default function useStateWithError<S>(initialState: S | (() => S), initialError?: string | (() => string), options?: UseStateWithErrorOptions<S>): ResultType<S>;
