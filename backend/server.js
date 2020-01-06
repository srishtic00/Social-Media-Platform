const express = require('express');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator')
const fs=require('fs')

const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

const postRoutes = require('./routes/post');
const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');



mongoose
    .connect(process.env.ATLAS_URI, {
        useNewUrlParser: true
    })
    .then(() => console.log('DB Connected'));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
});


app.get('/',(req,res)=>{
    fs.readFile('docs/apiDocs.json',(err,data)=>{
        if(err){
            res.status(400).json({
                error:err
            })
        }
        const docs=JSON.parse(data)
        res.json(docs)
    })
})

//middleware
app.use(morgan('dev'));
app.use(bodyParser.json())
app.use(cookieParser())
app.use(expressValidator())
app.use(cors())
app.use('/',postRoutes)
app.use('/',authRoutes)
app.use('/',userRoutes)
app.use(function(err,req,res,next)
{
    if(err.name==='UnauthorizedError'){
        res.status(401).json({error:'Unauthorized'})
    }
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`A Node Js API is listening on port: ${port}`);
});



