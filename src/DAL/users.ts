import { AppDataSource } from "../data-source";
import { Users } from "../entity/Users.model";

export const getUsersDAL=async (skip:number,take:number)=>{
    const userRepository = AppDataSource.getRepository(Users)
    try{
        return await userRepository.find({skip,take})
    }
    catch (error) {
        throw new Error("Failed to retrieve users!");
      }
}