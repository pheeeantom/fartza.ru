import { createSlice } from "@reduxjs/toolkit";
import { getGoodsFromAPI } from "./action_creators";

const initialState = {
    /*goods: null,
    isLoading: false,
    error: null*/
    lastArgs: null
}

export const goodsSlice = createSlice({
    name: 'goods',
    initialState,
    reducers: {
        setLastArgs(state, action) {
            state.lastArgs = action.payload;
        }
    }
    /*extraReducers: (builder) => {
        builder.addCase(getGoodsFromAPI.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = null;
            state.goods = action.payload;
        }),
        builder.addCase(getGoodsFromAPI.pending, (state, action) => {
            state.isLoading = true;
        }),
        builder.addCase(getGoodsFromAPI.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
    }*/
});

const { actions, reducer } = goodsSlice;

// export individual action creator functions
export const { setLastArgs } = actions;

// often the reducer is a default export, but that doesn't matter
export default reducer;