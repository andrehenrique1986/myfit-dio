import { legacy_createStore as createStore, Store } from "redux";
import { persistStore, persistReducer, Persistor } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { RootState } from ".";
import rootReducer from ".";

const persistConfig = {
    key: 'root',
    storage,
    whitelist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store: Store<RootState> = createStore(persistedReducer);

const persistor: Persistor = persistStore(store);

export { store, persistor };