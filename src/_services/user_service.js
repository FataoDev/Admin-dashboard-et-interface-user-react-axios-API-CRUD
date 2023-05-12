import Axios from '@/_services/caller_service'
// import axios from 'axios'

let getAllUsers=()=>{
    return Axios.get('http://127.0.0.1:8989/users')
}

let getUser =(uid)=>{
    return Axios.get('http://127.0.0.1:8989/users/'+uid)
}

let updateUser=(user)=>{
    return Axios.patch('http://127.0.0.1:8989/users/'+user.id,user)
}

let delUser=(uid)=>{
    return Axios.delete('http://127.0.0.1:8989/users/'+uid)
}

let addUser=(user)=>{
    return Axios.put('http://127.0.0.1:8989/users',user)
}

export const userService ={
    getAllUsers,
    getUser,
    updateUser,
    delUser,
    addUser
}