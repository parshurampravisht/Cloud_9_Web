import _isEqual from "lodash/isEqual";

import { type FormEvent, useCallback, useState } from "react";

export interface IUseFormState<T> {
  formState: T;
  dirty: boolean;
  error: TErrorState<T> | undefined;
  handleInputChange: (obj: Partial<T>) => void;
  resetState: () => void;
  setInitialState: (obj: Partial<T>) => void;
  setRule: (name: Partial<keyof T>, rules: Array<TRules<T>>) => void;
  setError: (name: Partial<keyof T>, errorMessage: string) => void;
  onSubmit: (
    onSuccess: (formState: T) => void,
    onError?: (error: TErrorState<T>, formState: T) => void
  ) => (event: FormEvent<HTMLFormElement>) => void;
}

type TErrorState<U> = Partial<Record<Partial<keyof U>, string>>;

type TRules<Q> = { msg: string; func: (value: string, fs: Q) => boolean };

type TRuleSet<U> = Partial<Record<Partial<keyof U>, TRules<U>[]>>;

export function useFormState<T>(initialState: T): IUseFormState<T> {
  const [formState, setFormState] = useState<T>(initialState);
  const [_initialState, _setInitialState] = useState<T>(initialState);
  const [dirty, setDirty] = useState<boolean>(false);

  const [errorState, setErrorState] = useState<TErrorState<T>>();
  const [ruleState, setRuleState] = useState<TRuleSet<T>>();

  const checkDirty = useCallback((data: T) => {
    _isEqual(_initialState, data) ? setDirty(false) : setDirty(true);
  }, []);

  const setInitialState = useCallback((data: Partial<T>) => {
    const newData = { ...formState, ...data };
    _setInitialState(newData);
    handleInputChange(newData);
    setDirty(false);
  }, []);

  const handleInputChange = useCallback((valObj: Partial<T>) => {
    // clearing all previous error state
    setErrorState((prevState) => {
      if (!prevState) return;
      const errorState = { ...(prevState || {}) };
      Object.keys(valObj).forEach((key) => {
        delete errorState[key as keyof T];
      });
      return errorState;
    });

    setFormState((previousFormState) => {
      const newFormState = { ...previousFormState, ...valObj };
      checkDirty(newFormState);
      return newFormState;
    });
  }, []);

  const resetState = () => setFormState({} as T);

  const validateForm = () => {
    const _ruleState = ruleState;

    const newErrorState: TErrorState<T> = {};
    let isFormValid = true;

    for (const _key in _ruleState) {
      const currentKey = _ruleState[_key];
      if (currentKey)
        for (let i = 0; i < currentKey.length; i++) {
          const currentRule = currentKey[i] || {};
          if (
            !currentRule.func(formState[_key] as unknown as string, formState)
          ) {
            newErrorState[_key] = currentRule.msg;
            isFormValid = false;
            break;
          }
        }
    }
    setErrorState({ ...newErrorState });

    return { isFormValid, newErrorState };
  };

  const onSubmit =
    (
      onSuccessCb: (arg0: T) => void,
      onErrorCb?: (arg0: Partial<Record<keyof T, string>>, arg1: T) => void
    ) =>
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const { isFormValid, newErrorState } = validateForm();
      if (isFormValid) {
        onSuccessCb(formState);
      } else {
        onErrorCb?.(newErrorState, formState);
      }
    };

  const setRule = (name: Partial<keyof T>, rules: Array<TRules<T>>): void => {
    const _ruleState = ruleState || {};
    setRuleState({ ..._ruleState, [name]: rules });
  };

  const setError = (name: Partial<keyof T>, errMessage: string): void => {
    setErrorState((prevState) => ({
      ...(prevState || {}),
      [name]: errMessage,
    }));
  };

  return {
    formState,
    handleInputChange,
    resetState,
    setInitialState,
    dirty,
    error: errorState,
    setRule,
    onSubmit,
    setError,
  };
}
