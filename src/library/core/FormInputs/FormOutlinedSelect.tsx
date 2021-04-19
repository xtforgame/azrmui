/* eslint-disable react/prop-types, react/forbid-prop-types, react/no-find-dom-node */
import React, { useState, useRef, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
import { v4 } from 'uuid';
import OutlinedInput, { OutlinedInputProps } from '@material-ui/core/OutlinedInput';
import InputLabel, { InputLabelProps } from '@material-ui/core/InputLabel';
import FormControl, { FormControlProps } from '@material-ui/core/FormControl';
import FormHelperText, { FormHelperTextProps } from '@material-ui/core/FormHelperText';
import Select, { SelectProps } from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

export type MenuItemType = {
  key?: any;
  value: any;
  label: string;
};

export type FormSelectProps = SelectProps & {
  label?: string;
  helperText?: string;
  fullWidth?: boolean;
  formProps?: FormControlProps;
  labelProps?: InputLabelProps;
  helperTextProps?: FormHelperTextProps;
  inputProps?: OutlinedInputProps;
  items?: MenuItemType[];
  idKey?: string;
  valueKey?: string;
  labelKey?: string;
};

export default (props : FormSelectProps) => {
  const {
    id: idFromProps,
    name,
    label,
    helperText,
    fullWidth,
    margin,
    formProps,
    inputProps,
    children,
    labelProps,
    helperTextProps,
    items,
    idKey = 'id',
    valueKey = 'value',
    labelKey = 'label',
    ...rest
  } = props;
  const [id] = useState(idFromProps || v4());
  const [labelWidth, setLabelWidth] = useState(0);

  const inputLabelRef = useRef(null);

  useLayoutEffect(() => {
    if (inputLabelRef.current) {
      setLabelWidth(ReactDOM.findDOMNode(inputLabelRef.current).offsetWidth);
    }
  }, [label]);

  return (
    <FormControl variant="outlined" margin={margin || 'normal'} fullWidth {...formProps}>
      {!!label && (
        <InputLabel
          ref={inputLabelRef}
          htmlFor={id}
          {...labelProps}
        >
          {label}
        </InputLabel>
      )}
      <Select
        input={<OutlinedInput {...inputProps} labelWidth={labelWidth} name={name} id={id} />}
        {...rest}
      >
        {items && items.map(i => (<MenuItem key={i[idKey] || i[valueKey]} value={i[valueKey]}>{i[labelKey]}</MenuItem>))}
        {children}
      </Select>
      {!!helperText && (
        <FormHelperText id={`${id}-helper-text`} {...helperTextProps}>
          {helperText}
        </FormHelperText>
      )}
    </FormControl>
  );
};
