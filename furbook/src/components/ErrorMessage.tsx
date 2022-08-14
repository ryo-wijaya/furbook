import React from 'react';
import { HelperText } from 'react-native-paper';

type PaperProps = React.ComponentProps<typeof HelperText>;

interface CustomProps {
  visible: boolean,
  text: string,
  style?: PaperProps
}

const ErrorMessage = ({visible, text, style}: CustomProps) => {

  if (style == undefined) {
    return (
      <HelperText 
        type="error" 
        visible={visible}
        >
        {text}
      </HelperText>
    );
  } else {
    return (
      <HelperText 
        type="error" 
        visible={visible}
        style={style}
        >
        {text}
      </HelperText>
    );
  }
}

export default ErrorMessage;