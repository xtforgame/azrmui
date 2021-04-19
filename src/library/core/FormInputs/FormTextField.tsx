/* eslint-disable react/prop-types, react/forbid-prop-types, react/jsx-filename-extension */
import React, { useState } from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';

export type FormTextFieldProps = TextFieldProps & {
  onPressEnter?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
  onPressEnterCheckCondition?: (e: any) => boolean;
};

export default (props: FormTextFieldProps) => {
  const {
    onKeyDown = () => {},
    onCompositionStart = () => {},
    onCompositionUpdate = () => {},
    onCompositionEnd = () => {},
    onPressEnter,
    onPressEnterCheckCondition,
    ...rest
  } = props;

  const [isOnComposition, setIsOnComposition] = useState(false);

  const onKeyPressed = (e) => {
    const {
      onPressEnter = () => {},
      multiline,
    } = props;
    const {
      onPressEnterCheckCondition = event => (!multiline || event.nativeEvent.shiftKey),
    } = props;
    if (!isOnComposition && e.keyCode === 13 && onPressEnterCheckCondition(e)) {
      // e.preventDefault();
      onPressEnter(e);
    }
  };

  const handleComposition = (e) => {
    if (e.type === 'compositionend') {
      setIsOnComposition(false);
    } else {
      setIsOnComposition(true);
    }
  };
  return (
    <TextField
      variant="outlined"
      onKeyDown={(e) => {
        onKeyDown(e);
        onKeyPressed(e);
      }}
      onCompositionStart={(e) => {
        onCompositionStart(e);
        handleComposition(e);
      }}
      onCompositionUpdate={(e) => {
        onCompositionUpdate(e);
        handleComposition(e);
      }}
      onCompositionEnd={(e) => {
        onCompositionEnd(e);
        handleComposition(e);
      }}
      {...rest}
    />
  );
};
