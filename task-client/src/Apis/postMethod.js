import axiosSecure from ".";
export const postTask= async(taskInfo)=>{
    const {data}= await axiosSecure.post('/submittask', taskInfo)
    return data
}