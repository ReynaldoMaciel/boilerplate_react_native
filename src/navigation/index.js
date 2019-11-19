import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Login from 'boilerplate_app/src/screens/Login'
import Home from 'boilerplate_app/src/screens/Home'
import Register from 'boilerplate_app/src/screens/Register'
import TabNavigator from './TabNavigator'

const AppNavigator = createSwitchNavigator({
  Login,
  Home: TabNavigator,
  Register,
})

export default createAppContainer(AppNavigator)
