import AppNavigator from './src/navigation'
import setupRedux from './src/store'
import React, { useEffect, useState } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { setLocale } from 'yup'
import YupMessages from './src/components/Formik/YupMessages'
const { store, persistor } = setupRedux()
if (__DEV__) {
  import('./src/utils/reactotron')
}
setLocale(YupMessages)

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
