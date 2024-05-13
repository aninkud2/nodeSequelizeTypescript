const express=require("express")

const router=express.Router()
const homepage=require("../controlers/userController")
router.get("/",homepage)

module,exports=router