import AppNavigator from 'boilerplate_app/src/navigation'
import React from 'react'
import { setLocale } from 'yup'
import YupMessages from './src/components/Formik/YupMessages'
setLocale(YupMessages)
import { Provider } from 'react-redux'
import setupRedux from 'boilerplate_app/src/store'
const { store, persistor } = setupRedux()
import { PersistGate } from 'redux-persist/integration/react'

const App = () => {
  return (
    <>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    </>
  )
}

export default App
