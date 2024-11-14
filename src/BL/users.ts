import {getUsersDAL} from "../DAL/users";



export const getUsersBL=async (pageNumber:number, pageSize:number)=>{
    try{
        console.log("hey")
        const offset = pageNumber*pageSize
        return await getUsersDAL(offset, pageSize)
    }
    catch (error) {
        console.log("error from BL")
        console.log(error)
        throw new Error("Failed to retrieve users!");
      }
}