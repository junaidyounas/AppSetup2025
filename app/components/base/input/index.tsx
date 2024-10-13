import React from 'react';
import {
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {heightRatio, widthRatio} from 'utils/responsive/pixelRatio';
import {textRatio} from 'utils/responsive/textRatio';
import {colors} from 'utils/theme/colors';
import TextWidget from '../text';
import Label1 from 'components/ui/labels/label1';

interface CustomInputProps extends TextInputProps {
  leftIcon?: any; // Name of left icon
  rightIcon?: any; // Name of right icon
  mt?: number;
  w?: number;
  h?: number;
  bg?: string;
  label?: string;
  placeHolder?: string;
  isDisabled?: boolean;
}

const InputWidget: React.FC<CustomInputProps> = ({
  leftIcon,
  rightIcon,
  style,
  mt = 0,
  w = 90,
  h = 6,
  bg = colors.gray1,
  label,
  placeHolder,
  isDisabled,
  ...restProps
}) => {
  // Define styles
  const mainStyle: ViewStyle = {
    marginTop: heightRatio(mt),
  };
  const labelStyle: TextStyle = {
    paddingBottom: 3,
    color: colors.gray6,
    fontSize: textRatio(13)
  };
  const containerStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: bg, // Gray background
    borderRadius: widthRatio(10), // Circular border radius
    paddingHorizontal: 15,
    width: widthRatio(w),
    height: heightRatio(h),
  };

  const inputStyle: TextStyle = {
    flex: 1,
    marginLeft: leftIcon ? 10 : 0,
    marginRight: rightIcon ? 10 : 0,
    paddingVertical: 12,
    fontSize: textRatio(16),
    color: colors.gray7, // Text color
  };

  return (
    <View style={[mainStyle]}>
      {label && <TextWidget style={[labelStyle]}>{label}</TextWidget>}
      <View style={[containerStyle, style]}>
        {leftIcon && leftIcon}

        <TextInput editable={isDisabled} placeholderTextColor={colors.gray5} placeholder={placeHolder} style={inputStyle} {...restProps} />
        {rightIcon && rightIcon}
      </View>
    </View>
  );
};

export default InputWidget;
