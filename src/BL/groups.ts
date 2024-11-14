import {getGroupsDAL} from "../DAL/groups";

export const getGroupsBL=async (pageNumber:number, pageSize:number)=>{
    try{
        return await getGroupsDAL(pageNumber*pageSize, pageSize)
    }
    catch (error) {
        throw new Error("Failed to retrieve users!");
      }
}