import { configureStore } from "@reduxjs/toolkit";
import {  efacility } from "../slice/facilitySlice";
import { selectFacility , userSelectedSlice } from "../slice/userSelected";


export const store = configureStore({
    reducer: {
        facilityReducer : efacility.reducer,
        userFacility : userSelectedSlice.reducer
    }
})

// store.dispatch(addFacilities(["deepak" , "JAdhav" , "India"]))
console.log(store.getState())
