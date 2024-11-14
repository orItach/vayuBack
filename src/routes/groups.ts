import express,{Router, Request, Response} from "express"
import { getGroupsBL } from "../BL/groups"
import { PagingReq } from "."
const router:Router = express.Router()

router.get('/',async (req:Request<{}, {}, {}, PagingReq>,res:Response)=>{
    const defaultPageNumber ="0"
    const defaultPageSize = "5"
    const {pageNumber, pagesize} = req.query;

    res.json(await getGroupsBL(Number.parseInt(pageNumber?? defaultPageNumber),Number.parseInt(pagesize?? defaultPageSize)))
})

export default router