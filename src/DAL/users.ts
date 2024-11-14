import { AppDataSource } from "../data-source";
import { User_groups } from "../entity/User_groups.model";
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

export const deleteUsersDAL=async (userId:number)=>{
    const userRepository = AppDataSource.getRepository(Users)
    try{
        const deleteResult = await userRepository.delete({id:userId})
        if (deleteResult.raw) {
            await AppDataSource.transaction(async (transactionalEntityManager) => {
                const userGroupsRepository = transactionalEntityManager.getRepository(User_groups)
                const currentGroup = await userGroupsRepository.findOne({where:{user_id:userId}})
                if (currentGroup){
                    //update the group status to empty 
                    return userGroupsRepository.update(
                        {group_id:currentGroup.group_id},
                        {group_id:currentGroup.group_id,
                        user_id:0
                    })
                }
            })
        }
    }
    catch (error) {
        throw new Error("Failed to retrieve users!");
      }
}