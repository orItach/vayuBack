import express,{Router, Request, Response} from "express"
import { getUsersBL,deleteUsersBL } from "../BL/users"
import { PagingReq } from "."
const router:Router = express.Router()

router.get('/',async (req:Request<{}, {}, {}, PagingReq>,res:Response)=>{
    const defaultPageNumber ="0"
    const defaultPageSize = "5"
    const {pageNumber, pagesize} = req.query;

    res.json(await getUsersBL(Number.parseInt(pageNumber?? defaultPageNumber),Number.parseInt(pagesize?? defaultPageSize)))
})
interface DeleteUserReq {
    userId: string;
}

router.delete('/deleteUser',async (req:Request<{}, {}, {}, DeleteUserReq>,res:Response)=>{
    const {userId} = req.query;
    if (userId) {
        res.json(await deleteUsersBL(Number.parseInt(userId)))
    }
})
export default router