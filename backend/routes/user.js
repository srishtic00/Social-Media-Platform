const express=require('express')
const {requireSignin}=require('../controllers/auth')
const {userById,allUsers,getUser,updateUser,findPeople,deleteUser,userPhoto,addFollowing,addFollower,removeFollowing,removeFollower,followingList,followersList}=require('../controllers/user')

const router=express.Router()

router.put('/user/follow',requireSignin,addFollowing,addFollower)
router.put('/user/unfollow',requireSignin,removeFollowing,removeFollower)

router.get('/users',allUsers)
router.get('/user/:userId',requireSignin,getUser)
router.put('/user/:userId',requireSignin,updateUser)
router.delete('/user/:userId',requireSignin,deleteUser)
router.get('/user/photo/:userId',userPhoto)//seperate route for photos
router.get('/user/findPeople/:userId',requireSignin,findPeople)
router.get('/user/following/:userId',requireSignin,followingList)
router.get('/user/followers/:userId',requireSignin,followersList)

router.param('userId',userById)

module.exports=router;

