import {createSlice} from "@reduxjs/toolkit"

export const efacility = createSlice({
    name : "facilities",
    initialState : [],
    reducers : {
        addFacilities(state , action){
            return(
                [...state,
                ...action.payload]
            )
        }
    }
 })

export const {addFacilities} = efacility.actions