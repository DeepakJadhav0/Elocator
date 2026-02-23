import { createSlice } from "@reduxjs/toolkit";

export const userSelectedSlice = createSlice({
    name : "SelectedFacility",
    initialState : {},
    reducers : {
        selectFacility(state , action){
            return{
                ...state,
                ...action.payload
            }
        }
    }
})

export const { selectFacility } = userSelectedSlice.actions