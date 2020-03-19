import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import InputLinker, { useInputLinker } from '~/utils/InputLinker';
import useStylesByNs from '~/styles/useStylesByNs';
import {
  propagateOnChangeEvent,
} from '~/utils/InputLinker/helpers';
import { IFieldLink, IInputLinker, FieldValue, FieldConfig } from '~/utils/InputLinker/core/interfaces';

export const defaultIlOnInit = <
  FieldLink extends IFieldLink<FieldLink>,
  LinkerType extends IInputLinker<FieldLink>
>(props : any) => (il : LinkerType) => {
  const { fields = [], defaultValues } : {
    fields?: FieldConfig<FieldLink>[];
    defaultValues?: { [s : string] : FieldValue };
  } = props;

  il.add(...(
    fields.map(field => ({
      presets: [field, propagateOnChangeEvent()],
    }))
  ));

  il.setDefaultValues(defaultValues || {});
  il.resetDirtyFlags();
};

export type OnSubmitFunction<LinkerType> = (
  outputs: { [s : string] : any },
  il: LinkerType,
) => any;

export type LayoutFeatureProps<LinkerType> = {
  onSubmit?: OnSubmitFunction<LinkerType>;
  [s : string] : any;
};

export default <
  FieldLink extends IFieldLink<FieldLink>,
  LinkerType extends IInputLinker<FieldLink>
>(props : LayoutFeatureProps<LinkerType>, ilOnInit?: Function) => {
  const {
    value,
    namespace,
    ignoredUndefinedFromOutputs = true,
    Linker,
    linkerOptions,

    i18nNs = [],
    styleNs = [],
    onInited = () => undefined,
    onDidMount = () => undefined,
    onSubmit = () => undefined,
  } = props;

  if (!Array.isArray(i18nNs)) {
    throw new Error(`Expect i18nNs as an Array, got: ${i18nNs}`);
  }

  if (!Array.isArray(styleNs)) {
    throw new Error(`Expect styleNs as an Array, got: ${styleNs}`);
  }

  const tData = useTranslation(i18nNs);
  const classesByNs = useStylesByNs(styleNs);

  const createInitFunc = (il : LinkerType, { reset } : any) => {
    (ilOnInit || defaultIlOnInit<FieldLink, LinkerType>(props))(il);
    if (!reset) {
      onInited(il);
    }
  };

  const ilResults = useInputLinker<FieldLink, LinkerType>(
    {/* props */},
    Linker || InputLinker,
    {
      ...linkerOptions,
      namespace,
      ignoredUndefinedFromOutputs,
      controlled: !!value,
    },
    createInitFunc,
  );
  const { il } = ilResults;

  const host = {
    handleSubmit: () => {
      if (il.validate()) {
        const outputs = il.getOutputs();
        onSubmit(outputs, il);
        return {
          outputs,
          linker: il,
        };
      }
      return null;
    },
    props: {
      ...props,
      classesByNs,
    },
  };

  useEffect(() => { onDidMount(il); }, []);

  return {
    ...ilResults,
    classesByNs,
    tData,
    host,
  };
};
