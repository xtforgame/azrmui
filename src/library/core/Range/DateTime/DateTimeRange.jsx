/* eslint-disable react/prop-types, react/forbid-prop-types */
import React from 'react';
import { useTranslation } from 'react-i18next';
import { FormDateTimePicker, FormSpace } from '~/core/FormInputs';

export default (props) => {
  const {
    lowerBound,
    upperBound,
    onLowerBoundChange,
    onUpperBoundChange,
  } = props;

  const { t } = useTranslation(['builtin-components']);

  return (
    <React.Fragment>
      <FormDateTimePicker
        label={t('dateTimeStart')}
        minutesStep={60}
        value={lowerBound}
        onChange={onLowerBoundChange}
      />
      <FormSpace variant="content2" />
      <FormDateTimePicker
        label={t('dateTimeEnd')}
        minutesStep={60}
        value={upperBound}
        onChange={onUpperBoundChange}
      />
    </React.Fragment>
  );
};
