import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Login from 'boilerplate_app/src/screens/Login'
import Home from 'boilerplate_app/src/screens/Home'
import Register from 'boilerplate_app/src/screens/Register'

const AppNavigator = createSwitchNavigator({
  Login,
  Home,
  Register,
})

export default createAppContainer(AppNavigator)
