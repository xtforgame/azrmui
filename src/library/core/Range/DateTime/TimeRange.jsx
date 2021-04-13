/* eslint-disable react/prop-types, react/forbid-prop-types */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormTimePicker, FormSpace } from '~/core/FormInputs';

export default (props) => {
  const {
    lowerBound,
    upperBound,
    onLowerBoundChange,
    onUpperBoundChange,
    PickerProps = {},
    Picker1Props = {},
    Picker2Props = {},
  } = props;

  const { t } = useTranslation(['builtin-components']);

  return (
    <React.Fragment>
      <FormTimePicker
        label={t('timeStart')}
        {...PickerProps}
        {...Picker1Props}
        value={lowerBound}
        onChange={onLowerBoundChange}
      />
      <FormSpace variant="content2" />
      <FormTimePicker
        label={t('timeEnd')}
        {...PickerProps}
        {...Picker2Props}
        value={upperBound}
        onChange={onUpperBoundChange}
      />
    </React.Fragment>
  );
};
