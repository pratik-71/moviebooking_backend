const express = require("express")
const { signup, login, coupons, logout, bookings } = require("../controllers/user.controller")
const router = express()

router.use(express.json())

router.get("/",(req,res)=>{
    res.status(200).send("user received")
})
router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
router.get("/coupons/:code",coupons)
router.post("/bookings",bookings)


module.exports=router