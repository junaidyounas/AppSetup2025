import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import React from 'react';
import { navigationRef } from './navRef';
import { mainRoutes } from './routes';
import { screens } from './screens';

// Create stack navigator
const AppStack = createStackNavigator();

// Define Stack Navigator
const StackNavigator = () => (
  <AppStack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
      ...TransitionPresets.SlideFromRightIOS,
    }}
    initialRouteName={screens.introScreen}>
    {Object.entries(mainRoutes).map(
      ([name, {path, component, options}], index) => (
        <AppStack.Screen
          key={index}
          options={options}
          name={name}
          component={component}
        />
      ),
    )}
  </AppStack.Navigator>
);



// Main Navigator
const MainNavigator = () => {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
