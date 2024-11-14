import { AppDataSource } from "../data-source";
import { Groups } from "../entity/Groups.model";

export const getGroupsDAL=async (skip:number,take:number)=>{
    const userRepository = AppDataSource.getRepository(Groups)
    try{
        return await userRepository.find({skip,take})
    }
    catch (error) {
        throw new Error("Failed to retrieve users!");
      }
}