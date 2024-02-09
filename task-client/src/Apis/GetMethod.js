import axiosSecure from ".";
export const getTask= async(email)=>{
    const {data}= await axiosSecure.get(`/allTask/${email}`)
    return data
}
