import { createAsyncThunk } from "@reduxjs/toolkit";
import { sendAPIRequest } from "../../react/io";

export const getGoodsFromAPI = createAsyncThunk(
    'goods/getAll',
    async (args, thunkAPI) => {
        const { word, since, sort } = args;
        try {
            const response = await sendAPIRequest({ command: 'searchGoods', word: word, since: since, sort: sort }, '/api', 'POST');
            if (response.body.goods[0].length === 0) {
                throw { error: 'Ничего не найдено!' };
            }
            return response.body.goods[0];
        }
        catch(e) {
            return thunkAPI.rejectWithValue(e.error);
        }
    }
);