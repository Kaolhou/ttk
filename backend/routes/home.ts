import express from "express";
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('welcome to my page :D')
})
export default router