import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {heightRatio, widthRatio} from 'utils/responsive/pixelRatio';
import {textRatio} from 'utils/responsive/textRatio';
import {colors} from 'utils/theme/colors';
import TextWidget from '../text';
import Label1 from 'components/ui/labels/label1';
import VectorIconPressable from 'components/small/vectorIconPressables';
import {shadows} from 'utils/theme/shadows';

interface CustomInputProps extends TextInputProps {
  leftIcon?: any; // Name of left icon
  rightIcon?: any; // Name of right icon
  mt?: number;
  w?: number;
  h?: number;
  bg?: string;
  label?: string;
  placeHolder?: string;
  options?: any;
  selectedOption?: string;
  onSelect: (item: any) => void;
  flatItem: (item: any) => string;
}

const DropdownWidget: React.FC<CustomInputProps> = ({
  leftIcon,
  rightIcon,
  style,
  mt = 0,
  w = 90,
  h = 6,
  bg = colors.gray1,
  label,
  options = [1, 2, 3, 4, 5],
  selectedOption,
  onSelect = () => {},
  flatItem = () => {},
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };
  // Define styles
  const mainStyle: ViewStyle = {
    marginTop: heightRatio(mt),
  };
  const labelStyle: TextStyle = {
    paddingBottom: 3,
    color: colors.gray6,
    fontSize: textRatio(13),
  };
  const containerStyle: ViewStyle = {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: bg, // Gray background
    borderRadius: widthRatio(10), // Circular border radius
    paddingHorizontal: 15,
    width: widthRatio(w),
    height: heightRatio(h),
    justifyContent: 'space-between',
    marginBottom: isOpen ? heightRatio(10) : 0,
  };

  const inputStyle: TextStyle = {
    flex: 1,
    marginLeft: leftIcon ? 10 : 0,
    marginRight: rightIcon ? 10 : 0,
    fontSize: textRatio(16),
    color: colors.gray5, // Text color
  };

  const dropdownItem: TextStyle = {
    flex: 1,
    marginLeft: leftIcon ? 10 : 0,
    marginRight: rightIcon ? 10 : 0,
    paddingVertical: 12,
    fontSize: textRatio(16),
    color: colors.gray5, // Text color
    borderBottomWidth: 1,
    borderColor: colors.gray3,
  };
  return (
    <View style={[mainStyle]}>
      {label && <TextWidget style={[labelStyle]}>{label}</TextWidget>}
      <View style={[containerStyle, style]}>
        <TextWidget style={[inputStyle]}>
          {selectedOption ? selectedOption : 'Please select an option'}
        </TextWidget>
        <VectorIconPressable
          onPress={toggleOpen}
          size={textRatio(28)}
          iconFamily="Entypo"
          name="chevron-small-down"
        />
      </View>
      {isOpen && (
        <View style={styles.dropdown}>
          <FlatList
            data={options}
            nestedScrollEnabled
            renderItem={({item, index}: {item: any; index: number}) => {
              return (
                <TouchableOpacity
                  onPress={() => {
                    onSelect(item);
                    toggleOpen();
                  }}>
                  <TextWidget
                    style={[
                      dropdownItem,
                      {
                        paddingHorizontal: widthRatio(3),
                        backgroundColor:
                          selectedOption == flatItem(item)
                            ? colors.green1
                            : colors.transparent,
                      },
                    ]}>
                    {flatItem(item)}
                  </TextWidget>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </View>
  );
};

export default DropdownWidget;

const styles = StyleSheet.create({
  dropdown: {
    position: 'absolute',
    top: heightRatio(8),
    height: heightRatio(20),
    left: 0,
    right: 0,
    backgroundColor: colors.gray2,
    zIndex: 999,
    borderRadius: widthRatio(5),
    paddingVertical: 10,
  },
});
