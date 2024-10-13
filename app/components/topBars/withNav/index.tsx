import React from 'react';
import {StyleSheet, Text, TouchableNativeFeedback, TouchableWithoutFeedback, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {heightRatio, widthRatio} from 'utils/responsive/pixelRatio';
import {colors} from 'utils/theme/colors';

type Props = {
  title: string;
  leftIcon?: any;
  onMenuPress?: any;
};

const TopBarWithNavIcon = (props: Props) => {
  const {title, leftIcon, onMenuPress} = props;

  return (
    <View style={styles.container}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        colors={[colors.primary, colors.primary]}
        style={styles.gradient}>
        {leftIcon ? leftIcon : <></>}
        <Text style={styles.title}>{title}</Text>
      </LinearGradient>
    </View>
  );
};

export default TopBarWithNavIcon;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: heightRatio(7),
    alignItems: 'center',
  },
  gradient: {
    flex: 1,
    height: heightRatio(7),
    alignItems: 'center',
    flexDirection: 'row',
    width: widthRatio(100),
  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    flex: 1,
  },
  leftIconStyle: {
    position: 'absolute',
    left: 0,
  },
});
