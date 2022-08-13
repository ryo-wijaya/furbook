import React from 'react';
import { HelperText } from 'react-native-paper';

interface Props {
  visible: boolean,
  text: string,
}

const ErrorMessage = ({visible, text}: Props) => {
    return (
      <HelperText type="error" visible={visible}>
        {text}
      </HelperText>
    );
}

export default ErrorMessage;