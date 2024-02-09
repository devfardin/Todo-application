import axiosSecure from ".";
export const saveUser= async user=>{
    const currentUser= await {
        name: user?.displayName,
        profile: user?.photoURL,
        email: user?.email,
    }
    const {data}=axiosSecure.put(`/users/${user?.email}`, currentUser)
    return data 
}
export const getToken= async(email)=>{
    const {data}=axiosSecure.post('/jwt', email)
    return data
}
export const clearCookie= async () =>{
    const {data}=axiosSecure.get('/logout')
    return data
}