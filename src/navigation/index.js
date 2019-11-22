import React, { useEffect, useState } from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Login from 'boilerplate_app/src/screens/Login'
import Register from 'boilerplate_app/src/screens/Register'
import TabNavigator from './TabNavigator'
import NavigationService from './NavigationService'

const createRootContainer = logged => {
  return createAppContainer(
    createSwitchNavigator(
      {
        Login,
        Home: TabNavigator,
        Register,
      },
      {
        initialRouteName: logged ? 'Home' : 'Login',
      }
    )
  )
}

export default () => {
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    setLogged(false)
  }, [])

  const AppNavigationContainer = createRootContainer(logged)
  return (
    <AppNavigationContainer
      ref={navigatorRef => {
        NavigationService.setTopLevelNavigator(navigatorRef)
      }}
    />
  )
}
