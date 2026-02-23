import { configureStore } from "@reduxjs/toolkit";
import {  efacility } from "../slice/facilitySlice";
import { selectFacility , userSelectedSlice } from "../slice/userSelected";
import userSlice from "../slice/userSlice";


export const store = configureStore({
    reducer: {
        facilityReducer : efacility.reducer,
        userFacility : userSelectedSlice.reducer,
        user : userSlice.reducer
    }
});
