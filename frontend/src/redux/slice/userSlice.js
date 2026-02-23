import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name : "userData",
    initialState : {
        isAuth : false,
        user : {}
    },
    reducers : {
        addUser(state , action){
            return {
                ...state,
                user : action.payload,
                isAuth : true
             }
        },
        removeUser(state , action){
            return {
                ...state,
                user : {},
                isAuth : false
            }
        }
    }
})

export const {addUser , removeUser} = userSlice.actions
export default userSlice;