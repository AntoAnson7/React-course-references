import {configureStore,createSlice} from '@reduxjs/toolkit'

const userSlice=createSlice({
    name: "user",
    initialState:{value:""},
    reducers:{
        login: (state,action)=>{
            state.value=action.payload
        },

        logout:(state)=>{
            console.log("logged out succesfully")
            state.value=""
        }
    }
})

export const {login,logout}=userSlice.actions
export const store=configureStore({
    reducer:{
        user:userSlice.reducer
    }
})
