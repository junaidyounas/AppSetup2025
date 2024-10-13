import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { API_BASE } from '@env'

type Props = {}

const DashboardScreen = (props: Props) => {
  return (
    <View>
      <Text>{API_BASE}</Text>
    </View>
  )
}

export default DashboardScreen

const styles = StyleSheet.create({})