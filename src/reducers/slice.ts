import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState : StateType = {
    loading : false,
    results : [],
    words : []
}

const rootSlice = createSlice({
    name : "root",
    initialState, 
    reducers : {
        GetAllWordsLoading : (state:StateType) => {
            state.loading = true;
        },
        GetAllWordsSuccess : (state:StateType, action:PayloadAction<WordType[]>) => {
            state.loading = false;
            state.words = action.payload;
        },
        GetAllWordsError : (state:StateType, action:PayloadAction<string>) => {
            state.loading = false;
            state.error = action.payload;
        },
        SaveResult : (state:StateType, action:PayloadAction<string[]>) => {
            state.results = action.payload;
        },
        ClearState : (state:StateType) => {
            state.loading = false;
            state.error = "";
            state.results = [];
        }
    }
})

export const {GetAllWordsError, GetAllWordsLoading, GetAllWordsSuccess, SaveResult} = rootSlice.actions;

export const rootReducer = rootSlice.reducer;