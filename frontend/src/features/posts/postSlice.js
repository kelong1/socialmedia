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
export const getPost=createAsyncThunk("posts/get",async(thunkAPI)=>{
    try {
        return await postService.getPost()
    } catch (error) {
        const message=(error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
        
    }
})
export const deletePost=createAsyncThunk("posts/delete",async(id,thunkAPI)=>{
    try {
       
        return await postService.deletePost(id)
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
        .addCase(getPost.pending,(state)=>{
            state.isLoading=true
    })
    .addCase(getPost.fulfilled,(state,action)=>{
        state.isLoading=false
        state.isSuccess=true
        state.posts=action.payload
        
    })
    .addCase(getPost.rejected,(state,action)=>{
        state.isLoading=false
        state.isError=true
        state.message=action.payload
       
    })
    .addCase(deletePost.pending,(state)=>{
        state.isLoading=true
})
.addCase(deletePost.fulfilled,(state,action)=>{
    state.isLoading=false
    state.isSuccess=true
    state.posts = state.posts.filter(
        (post) => post._id !== action.payload.id
      )
    
})
.addCase(deletePost.rejected,(state,action)=>{
    state.isLoading=false
    state.isError=true
    state.message=action.payload
    
})

    }
})

export const {reset}=postSlice.actions
export default postSlice.reducer
