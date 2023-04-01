import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import goodsReducer from './reducers/goods_slice';
import { goodsAPI } from './services/goods_service';
import logregReducer from './reducers/logreg_slice';
import { logregAPI } from './services/logreg_service';

const rootReducer = combineReducers({
    goodsReducer,
    [goodsAPI.reducerPath]: goodsAPI.reducer,
    logregReducer,
    [logregAPI.reducerPath]: logregAPI.reducer
});

export const setupStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(goodsAPI.middleware).concat(logregAPI.middleware)
    });

    setupListeners(store.dispatch);

    return store;
}