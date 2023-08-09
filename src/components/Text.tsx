import React from 'react';
import {Text as TextRn, TextStyle, ViewStyle} from 'react-native';
interface PixelTextProps {
  children: React.ReactNode;
  style?: TextStyle;
}
const Text: React.FC<PixelTextProps> = ({children, style}) => {
  return <TextRn style={[defaultTextStyle, style]}>{children}</TextRn>;
};
const defaultTextStyle: TextStyle = {
  fontFamily: 'pixel',
};
export default Text;
