import { createStore } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'

import reducers from './ducks'
import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const setupRedux = () => {
  const store = createStore(persistedReducer)
  const persistor = persistStore(store)
  return { store, persistor }
}

export default setupRedux
