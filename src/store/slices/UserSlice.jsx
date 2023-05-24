import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState:[],
  reducers: {
    addUser(state,action){
      state.push(action.payload)
    },
    removeUser(state,action){
      state.splice(action.payload,1)
      console.log("hi",+action.payload)
    },
    deleteUser(state,action){
      //  console.log("isnide usrslice")
       return [];
    },
  },
  extraReducers(builder){
    builder.addCase(userSlice.actions.deleteUser,()=>{
      return[];
    })
  }
})
/*
if action is supposed to be handled by one reducer,user reducers
if action is supposed to be handled by multiple reducer,user extraReducers
*/
console.log(userSlice.actions )
export default userSlice.reducer;
export const {addUser, removeUser, deleteUser} =userSlice.actions; 