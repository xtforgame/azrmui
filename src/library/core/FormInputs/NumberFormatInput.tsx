/* eslint-disable react/prop-types, react/forbid-prop-types, react/jsx-filename-extension */
import React from 'react';
import NumberFormat, { NumberFormatProps } from 'react-number-format';

export type NumberFormatInputProps = NumberFormatProps & {
  inputRef?: ((el: HTMLInputElement) => void) | React.Ref<any>;
  onChange?: (e: any) => void;
};

export default (props : NumberFormatInputProps) => {
  const { inputRef, onChange = () => {}, ...other } = props;

  return (
    <NumberFormat
      getInputRef={inputRef}
      isNumericString
      onValueChange={(values) => {
        onChange({ target: { value: values.value } });
      }}
      {...other}
    />
  );
}
