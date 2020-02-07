exports.createPostValidator = (req,res,next) =>{
    req.check('title','Write a title').notEmpty();
    req.check('title','Title must be between 4 to 150 characters').isLength({
        min:4,
        max : 150
    })
    req.check('body','Write a body').notEmpty();
    req.check('body','Body must be between 4 to 2000 characters').isLength({
        min:4,
        max : 150
    })
    const errors = req.validationErrors()
    if(errors)
    {
        const firstError = errors.map((error)=>error.msg)[0]
        return res.status(400).json({error:firstError})
    }
    next();
}

exports.userSignupValidator=(req,res,next)=>{
    req.check("name","Name is required").notEmpty()
    req.check("Email must be between 3 and 32 characters")
    req.check("email","Email must be between 3 and 32 characters")
    .matches(/.+\@.+\..+/)
    .withMessage('Email is not valid')
    .isLength({
        min:4,
        max:25
    })

    req.check("password","Password is required").notEmpty()

    req.check('password')
    .isLength({min:6,max:15})
    .withMessage('Password must contain at least 6 characters')
    .matches(/\d/)
    .withMessage('Password must contain a number')

    const errors = req.validationErrors()
    if(errors)
    {
        const firstError = errors.map((error)=>error.msg)[0]
        return res.status(400).json({error:firstError})
    }
    next();
}