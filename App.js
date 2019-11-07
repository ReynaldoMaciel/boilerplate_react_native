import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import Login from 'boilerplate_app/src/screens/Login'
import { setLocale } from 'yup'
import YupMessages from './src/components/Formik/YupMessages'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
setLocale(YupMessages)
import AppNavigator from 'boilerplate_app/src/navigation'

const App = () => {
  return (
    <>
      {/* <Login /> */}
      <AppNavigator />
    </>
  )
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
})

export default App
