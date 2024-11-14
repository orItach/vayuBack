import express,{Router, Request, Response} from "express"
import { getUsersBL } from "../BL/users"
const router:Router = express.Router()

router.get('/',async (req:Request,res:Response)=>{
    const defaultPageNumber ="1"
    const defaultPageSize = "5"
    res.json(await getUsersBL(Number.parseInt(req.params.pageNumber?? defaultPageNumber),Number.parseInt(req.params.pagesize?? defaultPageSize)))
})

export default router