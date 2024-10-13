/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import {screens} from './screens';
import {CommonActions, StackActions} from '@react-navigation/native';

export const isMountedRef: any = React.createRef();
export const navigationRef: any = React.createRef();

export function navigate(name: string, params?: object) {
  if (navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.navigate(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function navigatePush(name: string, params?: object) {
  if (navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.push(name, params);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function replace(name: string, params?: object) {
  if (navigationRef.current) {
    // Perform navigation if the app has mounted
    const popAction = StackActions.pop(1);
    const toDispatch = StackActions.replace(name, params);
    navigationRef.current.dispatch(StackActions.pop(2));

  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}


export function goBack() {
  if (navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.goBack();
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function resetToScreen(name: string, params?: object) {
  if (navigationRef.current) {
    // Perform navigation if the app has mounted
    navigationRef.current.reset({
      index: 0,
      routes: [{name: name}],
      params,
    });
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}

export function resetToHistory(name: string, params?: object) {
  if (navigationRef.current) {
    // Perform navigation if the app has mounted
    const resetAction = CommonActions.reset({
      index: 1,
      routes: [{name: screens.main.dashboard}, {name: name}],
    });

    navigationRef.current.dispatch(resetAction);
  } else {
    // You can decide what to do if the app hasn't mounted
    // You can ignore this, or add these actions to a queue you can call later
  }
}
