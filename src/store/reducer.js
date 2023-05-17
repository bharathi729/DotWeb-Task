import {createSlice} from "@reduxjs/toolkit";
const initialState={
    userinfo:{}
}

export const dataSlice=createSlice({
    name:"data",
    initialState,
    reducers:{
        setUserInfo:(state,action)=>{
            localStorage.setItem("userinfo",JSON.stringify(action.payload));
            state.userinfo=action.payload;
        }
    }
});

//Action

export const{
    setUserInfo,
}=dataSlice.reducer;