import { images } from 'assets';
import { navigate } from 'navigations/navRef';
import { screens } from 'navigations/screens';
import React, { useEffect } from 'react';
import { Animated, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { heightRatio, widthRatio } from 'utils/responsive/pixelRatio';
import { analyticsLog } from '../../utils/analytics';

const SplashScreen: React.FC = () => {
  const logoScale = new Animated.Value(0.5);
  const logoPosition = new Animated.Value(0);
  const titleOpacity = new Animated.Value(0);
  const titlePosition = new Animated.Value(10);
  const messageOpacity = new Animated.Value(0);
  const messagePosition = new Animated.Value(10);
  const buttonOpacity = new Animated.Value(0);

  useEffect(() => {
    analyticsLog('introductino_screen', 'just seen').then(res => {
      console.log("🚀 ~ analyticsLog ~ res:", res)
    })
    Animated.sequence([
      Animated.timing(logoScale, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(logoScale, {
        toValue: 0.8,
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.timing(logoPosition, {
        toValue: -heightRatio(2),
        duration: 500,
        useNativeDriver: true,
      }),
      Animated.parallel([
        Animated.timing(titleOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(titlePosition, {
          toValue: -heightRatio(1),
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
      Animated.parallel([
        Animated.timing(messageOpacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(messagePosition, {
          toValue: -heightRatio(1),
          duration: 500,
          useNativeDriver: true,
        }),
      ]),
      Animated.timing(buttonOpacity, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={[
          { transform: [{ scale: logoScale }, { translateY: logoPosition }] },
        ]}
      >
        <Image source={images.logo} style={styles.logo} />
      </Animated.View>

      <Animated.Text
        style={[
          styles.title,
          {
            opacity: titleOpacity,
            transform: [{ translateY: titlePosition }],
          },
        ]}
      >
       {`Welcome to\nDomains Marketplace`}
      </Animated.Text>

      <Animated.Text
        style={[
          styles.message,
          {
            opacity: messageOpacity,
            transform: [{ translateY: messagePosition }],
          },
        ]}
      >
        Discover domains for sale in our Auctions and Buy Now listings
      </Animated.Text>

      <Animated.View style={{ opacity: buttonOpacity }}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigate(screens.dashboard)}
        >
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: widthRatio(30),
    height: widthRatio(30),
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    paddingHorizontal: widthRatio(8),
  },
  message: {
    fontSize: 16,
    color: '#444',
    textAlign: 'center',
    paddingHorizontal: widthRatio(14),
    marginTop: heightRatio(3),
  },
  continueButton: {
    marginTop: heightRatio(2),
    borderWidth: 2,
    borderColor: '#00A76F7A',
    paddingVertical: heightRatio(1.2),
    paddingHorizontal: widthRatio(10),
    borderRadius: widthRatio(1),
  },
  buttonText: {
    fontSize: 16,
    color: '#00A76F',
    textAlign: 'center',
  },
});

export default SplashScreen;
