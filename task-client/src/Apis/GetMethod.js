import axiosSecure from ".";
export const getTask= async(email)=>{
    const {data}= await axiosSecure.get(`/allTask/${email}`)
    return data
}

export const singleTask= async(id)=>{
    const {data}= await axiosSecure.get(`/singleTask/${id}`)
    return data
}

// Delete method
export const taskDelete= async(id)=>{
    const {data}= await axiosSecure.delete(`/taskdelete/${id}`)
    return data
}

// Update Method
export const taskUpdate= async(id, info)=>{
    const {data}= await axiosSecure.put(`/taskupdate/${id}`, info)
    return data
}