import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    name:'',
    username:'',
    password:'',
}

const UserSlice = createSlice({
    name:'user',
    initialState,
    reducers:{
        update: (state, action) => {
            state.name = action.payload.name;
            state.username = action.payload.username;
            state.password = action.payload.password;
        },
    },
})

export const {update} = UserSlice.actions;
export default UserSlice.reducer