import { useState, SetStateAction } from 'react';

export const Cancel = Symbol('Cancel');

export type ResultType<S> = [
  S,
  (value: SetStateAction<S>, clearError?: boolean) => void,
  string,
  (value: SetStateAction<string>) => void,
];

export type UseStateWithErrorOptions<S> = {
  onSetState?: (newState: SetStateAction<S>) => boolean | void;
  onSetError?: (error: SetStateAction<string>, isReseting: boolean) => boolean | void;
};

export default function useStateWithError<S>(
  initialState: S | (() => S), initialError: string | (() => string) = '', options? : UseStateWithErrorOptions<S>,
) : ResultType<S> {
  const [state, setState] = useState(initialState);
  const [error, setError] = useState(initialError);

  const se = (newState: SetStateAction<string>, isReseting = false) => {
    if (options?.onSetError) {
      options?.onSetError(newState, isReseting);
    }
    setError(newState);
  };
  const sv = (newState: SetStateAction<S>, clearError = true) => {
    if (options?.onSetState) {
      options?.onSetState(newState);
    }
    setState(newState);
    if (clearError) {
      se('', true);
    }
  };

  return [state, sv, error, se];
}
