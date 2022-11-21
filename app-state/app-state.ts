import { createSlice, PayloadAction,createAsyncThunk } from '@reduxjs/toolkit'

  export interface messageInterface {
    message:{name:string,
    email:string,
    message:string,
    success:boolean}
    error:{
      name:null,
      email:null,
      message:null
    }
    success:boolean
  }
  
  // Define the initial state using that type
  export const messageState: messageInterface = {
    message:{name:'',
    email:'',
    message:'',
    success:false},
    error:{
    name:null,
    email:null,
    message:null,
    },
    success:false
  }
  
  export const submitMessage = createAsyncThunk(
    'submit/message',
    async function(messageInfo:{name:string,email:string,message:string}){
        
        try{
        const rawResponse = await fetch('api/send', {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({messageInfo})
          })
          return await rawResponse.json()
          
        
        }catch(e){
           console.log(e)
           return null
        }
      }
  )
  
  export const messageSlice = createSlice({
    name: 'message',
    initialState:messageState,
    reducers: {
      update: (state,action):messageInterface=>({success:false,error:{...state.error},message:{...state.message,[action.payload.field as keyof messageInterface]:action.payload.value}}),
      unset:state=>messageState,
      unsetError:state=>({...state,error:{name:null,email:null,message:null}}),
    },
    extraReducers:(builder)=>{
      builder.addCase(submitMessage.pending,(state,action)=>{
          return {...state,error:{name:null,email:null,message:null}}
      }).addCase(submitMessage.fulfilled,(state,action)=>{
        if(action.payload.message!='Message sent'){
          return {...state,error:{...action.payload.error}}
        }
        return {...state,success:true}
      }).addCase(submitMessage.rejected,(state,action)=>{
          return state
      })
  }
  })
  
export const { update,unset,unsetError } = messageSlice.actions
export default messageSlice.reducer