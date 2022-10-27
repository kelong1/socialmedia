import {createSlice,createAsyncThunk} from "@reduxjs/toolkit"
import { postService } from "./postService"



const initialState={
    posts:[],
    isSuccess:false,
    isError:false,
    isLoading:false,
    message:""
}

export const addPost=createAsyncThunk("posts/add",async(formData,thunkAPI)=>{
    try {
        return await postService.addPost(formData)
    } catch (error) {
        const message=(error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
        
    }
})


const postSlice=createSlice({
    name:"posts",
    initialState,
    reducers:{
        reset:(state)=>{
            state.isError=false
            state.isLoading=false
            state.isSuccess=false
            state.message=""
        }
        
    },
    extraReducers:(builder)=>{
        builder
        .addCase(addPost.pending,(state)=>{
                state.isLoading=true
        })
        .addCase(addPost.fulfilled,(state,action)=>{
            state.isLoading=false
            state.isSuccess=true
            state.posts.push(action.payload)
            
        })
        .addCase(addPost.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.message=action.payload
            state.posts=null
        })

    }
})

export const {reset}=postSlice.actions
export default postSlice.reducer
