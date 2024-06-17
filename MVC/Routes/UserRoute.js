const express=require("express")
const router=express.Router()
const userController=require("./userController")
// Get all users
router.get('/', userController.getUsers);

// Create a new user
router.post('/create', userController.createUser);

module.exports = router;




