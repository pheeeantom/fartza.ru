import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    
}

export const logregSlice = createSlice({
    name: 'logreg',
    initialState,
    reducers: {
        
    }
});

//const { actions, reducer } = logregSlice;
const { reducer } = logregSlice;

// export individual action creator functions
//export const { setLastArgs } = actions;

// often the reducer is a default export, but that doesn't matter
export default reducer;