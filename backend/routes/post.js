const express=require('express')
const {postById,updatePost,isPoster,deletePost,getPosts,createPost,postsByUser,photo,singlePost}=require('../controllers/post')
const {createPostValidator}=require('../validator')
const {userById}=require('../controllers/user')
const {requireSignin}=require('../controllers/auth')

const router=express.Router()

router.get('/posts',getPosts)
router.post('/post/new/:userId',requireSignin,createPost,createPostValidator)

router.get('/posts/by/:userId',requireSignin,postsByUser)
router.put('/post/:postId',requireSignin,isPoster,updatePost)
router.delete('/post/:postId',requireSignin,isPoster,deletePost)
router.get('/post/:postId', singlePost);

router.get('/post/photo/:postId',photo)
router.param('userId',userById)
router.param('postId',postById)
module.exports=router;

