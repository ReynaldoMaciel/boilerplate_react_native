import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Octicons from 'react-native-vector-icons/Octicons'
import { createAppContainer } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import Home from '../screens/Home'
import colors from '../constants/colors'

const initialRouteName = 'Home'

const tabBarOptions = {
  safeAreaInset: { bottom: 'always', top: 'never' },
  tabStyle: {
    backgroundColor: colors.white,
  },
  labelStyle: {
    color: colors.lightblue,
  },
  activeTintColor: colors.white,
  inactiveTintColor: colors.white,
  activeBackgroundColor: colors.white,
  inactiveBackgroundColor: colors.white,
}

const TabNavigator = createBottomTabNavigator(
  {
    MyProfile: {
      screen: Home,
      navigationOptions: {
        title: 'Perfil',
        tabBarOptions,
        tabBarIcon: () => (
          <MaterialCommunityIcons
            name="account"
            size={25}
            color={colors.lightblue}
          />
        ),
        keyboardHidesTabBar: false,
      },
    },
    Hours: {
      screen: Home,
      navigationOptions: {
        title: 'Ponto',
        tabBarOptions,
        tabBarIcon: () => (
          <MaterialIcons name="timer" size={25} color={colors.lightblue} />
        ),
        keyboardHidesTabBar: false,
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarOptions,
        tabBarIcon: () => (
          <FontAwesome name="home" size={25} color={colors.lightblue} />
        ),
        keyboardHidesTabBar: false,
      },
    },
    Activities: {
      screen: Home,
      navigationOptions: {
        title: 'Atividades',
        tabBarOptions,
        tabBarIcon: () => (
          <FontAwesome5 name="tasks" size={25} color={colors.lightblue} />
        ),
        keyboardHidesTabBar: false,
      },
    },
    Calendar: {
      screen: Home,
      navigationOptions: {
        title: 'Calendário',
        tabBarOptions,
        tabBarIcon: () => (
          <Octicons name="calendar" size={25} color={colors.lightblue} />
        ),
        keyboardHidesTabBar: false,
      },
    },
  },
  {
    initialRouteName,
  }
)

export default createAppContainer(TabNavigator)
