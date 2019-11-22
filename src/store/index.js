import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import hardSet from 'redux-persist/lib/stateReconciler/hardSet'
import reactotron from '../utils/reactotron'

import reducers from './ducks'
import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  stateReconciler: hardSet,
  whitelist: ['login'],
}

let persistedReducer = persistReducer(persistConfig, reducers)

const setupRedux = () => {
  const store = createStore(
    persistedReducer,
    __DEV__ ? reactotron.createEnhancer() : undefined
  )
  const persistor = persistStore(store)
  return { store, persistor }
}

export default setupRedux
