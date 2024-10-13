import React from 'react';
import { Text } from 'react-native';
import { colors } from 'utils/theme/colors';
type TextProps = React.ComponentProps<typeof Text>;

type Props = {
  children: any;
  color?: string;
  fontSize?: number;
} & TextProps;

const TextWidget = (props: Props) => {
  const {children, color=colors.black,fontSize} = props;
  return <Text style={{color:color ? color : colors.black, fontSize}} {...props}>{children}</Text>;
};

export default TextWidget;

