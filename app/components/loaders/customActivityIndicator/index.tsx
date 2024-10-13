import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

interface CustomActivityIndicatorProps {
  visible: boolean;
  message?: string;
}

const CustomActivityIndicator: React.FC<CustomActivityIndicatorProps> = ({ visible, message }) => {
  if (!visible) return null;

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#ffffff" />
        {message && <Text style={styles.message}>{message}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  container: {
    padding: 20,
    backgroundColor: '#333',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    marginTop: 10,
    fontSize: 16,
    color: '#ffffff',
  },
});

export default CustomActivityIndicator;
