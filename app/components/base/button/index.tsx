import React from 'react';
import {
  ActivityIndicator,
  Text,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import {heightRatio, widthRatio} from 'utils/responsive/pixelRatio';
import {textRatio} from 'utils/responsive/textRatio';
import {colors} from 'utils/theme/colors';

interface CustomButtonProps extends TouchableOpacityProps {
  children: React.ReactNode; // Button title
  onPress: () => void; // onPress event handler
  leftIcon?: string; // Name of left icon
  isLoading?: boolean; // Flag to show/hide activity indicator
  mt?: number; // marginTop
  w?: number;
  isDisabled?: boolean;
  bg?: string;
}

const ButtonWidget: React.FC<CustomButtonProps> = ({
  children,
  onPress,
  leftIcon,
  isLoading = false,
  mt = 0,
  w = 90,
  isDisabled,
  bg,
  style,
  ...restProps
}) => {
  // Define styles
  const containerStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: bg ? bg :colors.primary, // Gray background
    borderRadius: widthRatio(10), // Circular border radius
    paddingHorizontal: 15,
    marginTop: heightRatio(mt),
    justifyContent: 'center',
    width: widthRatio(w),
    height: heightRatio(6),
    ...style,
  };

  const textStyle: TextStyle = {
    fontSize: textRatio(15),
    color: colors.white, // Text color
    marginLeft: leftIcon ? 10 : 0,
  };

  return (
    <TouchableOpacity
      style={containerStyle}
      onPress={onPress}
      disabled={isLoading || isDisabled}
      {...restProps}>
      {leftIcon && leftIcon}
      {isLoading ? (
        <ActivityIndicator
          size="small"
          color={colors.gray1}
          style={{marginLeft: 10}}
        />
      ) : (
        <Text style={textStyle}>{children}</Text>
      )}
    </TouchableOpacity>
  );
};

export default ButtonWidget;
