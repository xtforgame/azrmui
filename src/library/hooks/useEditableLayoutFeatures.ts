import useLayoutFeaturesEx from '~/hooks/useLayoutFeaturesEx';
import useEffectIgnoreFirstRun from '~/hooks/useEffectIgnoreFirstRun';

export default (props) => {
  const {
    defaultValues,
    isEditing,
  } = props;

  const layoutFeaturesResult = useLayoutFeaturesEx(props);
  const {
    resetIl,
  } = layoutFeaturesResult;

  useEffectIgnoreFirstRun(() => {
    resetIl({ defaultValues });
    return undefined;
  }, [isEditing]);

  return layoutFeaturesResult;
};
