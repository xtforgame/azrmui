/* eslint-disable react/prop-types, react/forbid-prop-types, no-empty */
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import Email from '@material-ui/icons/Email';
import Phone from '@material-ui/icons/Phone';
import /* libphonenumber, */ {
  PhoneNumberFormat as PNF,
  PhoneNumberUtil,
} from 'google-libphonenumber';
import { Overwrite } from '~/common/utils';
import { isValidEmail } from '~/common/utils/validators';
import FormTextField, { FormTextFieldProps } from '../FormTextField';
import PhoneRegionSelect from './PhoneRegionSelect';
import { getCountryCodeFromBrowser } from './langToCountry';

const phoneUtil = PhoneNumberUtil.getInstance();

export const isValidPhoneNumber = (value) => {
  try {
    const country = getCountryCodeFromBrowser();
    const number = phoneUtil.parseAndKeepRawInput(value, country);
    return phoneUtil.isValidNumber(number);
  } catch (error) {}
  return false;
};
export { isValidEmail };


const useStyles = makeStyles(theme => ({
  adornment: {
    marginRight: 0,
  },
}));

export type FormPhoneOrEmailInputState = {
  rawInput: any;
  value: string | undefined;
  regionCode: string | undefined;
  type: string | undefined;
};

const rawInputToState : (x: any, y?: boolean, z?: boolean) => FormPhoneOrEmailInputState = (rawInput, enablePhone = true, enableEmail = true) => {
  let regionCode;
  let value = rawInput;
  let number;
  let type;

  if (enablePhone) {
    try {
      const country = getCountryCodeFromBrowser();
      number = phoneUtil.parseAndKeepRawInput(rawInput, country);
      // console.log('CountryCode:', number.getCountryCode());
      // console.log('NationalNumber:', number.getNationalNumber());
      // console.log('RegionCodeForNumber:', phoneUtil.getRegionCodeForNumber(number));
      // const formattedPhoneNumber = phoneUtil.format(number, /*PNF.NATIONAL*/ PNF.INTERNATIONAL);
      // console.log(formattedPhoneNumber);
      if (phoneUtil.isValidNumber(number)) {
        type = 'phone-number';
      }
      // e.target.value = formattedPhoneNumber;
      regionCode = phoneUtil.getRegionCodeForNumber(number);
      value = phoneUtil.format(number, PNF.E164);
    } catch (error) {}
  }

  if (enableEmail && isValidEmail(rawInput)) {
    type = 'email-address';
  }

  return {
    rawInput,
    value,
    regionCode,
    type,
  };
};

export type FormPhoneOrEmailInputProps = FormTextFieldProps & {
  enablePhone?: boolean;
  enableEmail?: boolean;
  onChange?: (state: FormPhoneOrEmailInputState) => any,
};

export default (props: FormPhoneOrEmailInputProps) => {
  const {
    enablePhone: eP,
    enableEmail: eE,
    onChange = () => {},
    ...rest
  } = props;

  const classes = useStyles();

  const [enablePhone] = useState(eP == null ? true : eP);
  const [enableEmail] = useState(eE == null ? true : eE);
  const [state, setState] = useState({
    ...rawInputToState(props.value, enablePhone, enableEmail),
  });

  const handleChange = (e) => {
    const s = rawInputToState(e.target.value || '', enablePhone, enableEmail);
    onChange(s);
    setState(s);
  };

  useEffect(() => {
    const s = rawInputToState(props.value || '', enablePhone, enableEmail);
    onChange(s);
    setState(s);
  }, []);

  const { regionCode, type } = state;

  const component : any = undefined;

  const startAdornment = (
    <InputAdornment
      position="start"
      className={classes.adornment}
    >
      {regionCode != null ? <PhoneRegionSelect regionCode={regionCode} />
        : (
          <IconButton
            component={component}
            tabIndex="-1"
            onMouseDown={(event) => {
              event.preventDefault();
            }}
          >
            {enableEmail ? <Email color={type ? 'primary' : undefined} /> : <Phone />}
          </IconButton>
        )
      }
    </InputAdornment>
  );
  return (
    <FormTextField
      InputProps={{
        startAdornment,
      }}
      {...rest}
      onChange={handleChange}
    />
  );
};
