import { hitSlop } from 'constants/hitSlop';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors} from 'utils/theme/colors';

type Props = {
  name: string;
  onPress?: () => void;
  iconFamily?: string;
  size?: number;
  color?: string;
};

const VectorIconPressable = (props: Props) => {
  const {
    name,
    onPress,
    iconFamily = 'FontAwesome',
    size,
    color = colors.gray7,
  } = props;
  let IconComponent = FontAwesome; // Default to FontAwesome

  switch (iconFamily) {
    case 'FontAwesome':
      IconComponent = FontAwesome;
      break;
    case 'FontAwesome5':
      IconComponent = require(`react-native-vector-icons/FontAwesome5`).default;
      break;
    case 'Entypo':
      IconComponent = require(`react-native-vector-icons/Entypo`).default;
      break;
    case 'Ionicons':
      IconComponent = require(`react-native-vector-icons/Ionicons`).default;
      break;
    case 'Feather':
      IconComponent = require(`react-native-vector-icons/Feather`).default;
      break;
    case 'AntDesign':
      IconComponent = require(`react-native-vector-icons/AntDesign`).default;
      break;
    case 'MaterialCommunityIcons':
      IconComponent = require(`react-native-vector-icons/MaterialCommunityIcons`).default;
      break;
    default:
      console.warn(`Unsupported icon family: ${iconFamily}`);
      break;
  }

  return (
    <TouchableOpacity hitSlop={hitSlop} onPress={onPress}>
      <IconComponent size={size} name={name} color={color} />
    </TouchableOpacity>
  );
};

export default VectorIconPressable;

const styles = StyleSheet.create({});
