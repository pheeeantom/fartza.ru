import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import goodsReducer from './reducers/goods_slice';
import { goodsAPI } from './services/goods_service';

const rootReducer = combineReducers({
    goodsReducer,
    [goodsAPI.reducerPath]: goodsAPI.reducer
});

export const setupStore = () => {
    const store = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(goodsAPI.middleware)
    });

    setupListeners(store.dispatch);

    return store;
}