import {deleteUsersDAL, getUsersDAL} from "../DAL/users";

export const getUsersBL=async (pageNumber:number, pageSize:number)=>{
    try{
        return await getUsersDAL(pageNumber*pageSize, pageSize)
    }
    catch (error) {
        throw new Error("Failed to retrieve users!");
      }
}

export const deleteUsersBL=async (userId:number)=>{
    try{
        return await deleteUsersDAL(userId)
    }
    catch (error) {
        throw new Error("Failed to retrieve users!");
      }
}