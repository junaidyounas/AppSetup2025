import AsyncStorage from '@react-native-async-storage/async-storage';
import { combineReducers } from 'redux';
import { FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';
import appReducer from './appState/appSlice';

const persistConfig = {
  key: 'root',
  version: 1,
  storage: AsyncStorage,
  blacklist: ['isLoading', 'isNetworkAvailable']
};

const rootReducer = combineReducers({
  app: appReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const storeConfig = {
  reducer: persistedReducer,
  // middleware: [thunk],
  // middleware: () => new Tuple(thunk),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk,
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),

};
