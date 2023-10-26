import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { navigationProps } from './navigationProps/navigationProps'

import { ReadWriteTopTabs } from '../toptabs/ReadWriteTopTabs'

import GradientHeader from '../../../components/GradientHeader'

const Stack = createStackNavigator()

export const ReadWriteStacks = () => {
  return (
    <Stack.Navigator
      initialRouteName="ReadWrite"
      screenOptions={navigationProps}
    >
      <Stack.Screen
        name="ReadWrite"
        component={ReadWriteTopTabs}
        options={({ navigation }) => ({
          title: 'ReadWrite',
          headerBackground: () => <GradientHeader />,
        })}
      />
    </Stack.Navigator>
  )
}