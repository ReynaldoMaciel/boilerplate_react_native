import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import Login from 'boilerplate_app/src/screens/Login'
import Register from 'boilerplate_app/src/screens/Register'

const AppNavigator = createSwitchNavigator({
  Login,
  Register,
})

export default createAppContainer(AppNavigator)
