
const express=require('express')
const ejs=require('ejs')
const path=require('path')
const connectDB=require('./app/config/db')
const session=require('express-session')
const flash=require('connect-flash')
const cookieParser = require('cookie-parser');
const cors=require('cors')
const rateLimit = require("express-rate-limit");
const dotenv=require('dotenv').config()

const app=express()
connectDB()

app.use(cors())
app.use(session({
    cookie: {
        maxAge: 60000
    },
    secret: "witjrewjtore",
    resave: false,
    saveUninitialized: false
}));

app.use(cookieParser());
app.use(flash())
//setup view engine ejs
 app.set('view engine', 'ejs');
 app.set('views','views')

 app.use(express.urlencoded({extended:true}))
 app.use(express.json())

//for rate limit
// const limiter = rateLimit({
// 	windowMs: 1 * 60 * 1000, // 15 minutes
// 	limit: 2, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
//     message: "You have exceeded your 2 requests per minute limit.",
//     headers: true,
// })

// app.use(limiter)

//create a static folder
app.use(express.static(path.join(__dirname,'public')))
app.use('/uploads',express.static(path.join(__dirname,'/uploads')))
app.use('/uploads',express.static('uploads'))

app.use('/unlinkImage',express.static(path.join(__dirname,'/unlinkImage')))
app.use('/unlinkImage',express.static('unlinkImage'))


//define router here
const homeRoute=require('./app/router/homeRoute')
app.use(homeRoute)

//api create
const productRoute=require('./app/router/productRoute')
const joiRoute=require('./app/router/joi')
const csvRoute=require('./app/router/csvRoute')
app.use('/api', productRoute)
app.use('/api', joiRoute)
app.use('/api', csvRoute)

/**auth api route */

const authRoute=require('./app/router/authRouter')   
app.use('/api', authRoute) 

const aggrigateRoute=require('./app/router/aggrigateRoute')
app.use('/api', aggrigateRoute)

//unlink image route
const unlinkImageRoute=require('./app/router/UnlinkImageRoute')
app.use(unlinkImageRoute)

//multi image route
const multiImageRoute=require('./app/router/multiImageRoute')
app.use(multiImageRoute)

const PORT=3004
app.listen(PORT,()=>{
    console.log(`server is running port ${PORT}`);
    
})



