import axios from "axios"

const API="http://localhost:9000/app/users/"
const register=async(userData)=>{
    const response=await axios.post(API+"register",userData)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    return response.data
}
const login=async(userData)=>{
    const response=await axios.post(API+"login",userData)

    if(response.data){
        localStorage.setItem('user',JSON.stringify(response.data))
    }

    return response.data
}
const logout=async()=>{
    localStorage.removeItem("user")

}


const authService={
    register,
    login,
    logout
}
export default  authService