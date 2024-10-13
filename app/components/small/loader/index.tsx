import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import { hexToRgba } from 'utils/forColors';
import { widthRatio } from 'utils/responsive/pixelRatio';
import { colors } from 'utils/theme/colors';

type Props = {};

const SimpleLoader = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerView}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    </View>
  );
};

export default SimpleLoader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: hexToRgba(colors.blue3, 0.3),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    
  },
  innerView: {
    backgroundColor: colors.white,
    width: widthRatio(30),
    height: widthRatio(30),
    borderRadius: widthRatio(4),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
