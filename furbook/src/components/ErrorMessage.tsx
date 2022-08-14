import React from 'react';
import { HelperText } from 'react-native-paper';

type PaperProps = React.ComponentProps<typeof HelperText>;

interface CustomProps {
  visible: boolean,
  text: string,
  style?: PaperProps
}

const ErrorMessage = ({visible, text, style}: CustomProps) => {

  console.log("style", style)

  if (style == undefined) {
    console.log("control flow 1")
    return (
      <HelperText 
        type="error" 
        visible={visible}
        >
        {text}
      </HelperText>
    );
  } else {
    console.log("control flow 2")
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