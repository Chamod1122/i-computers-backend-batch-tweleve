import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/userRouter.js'
import productRouter from './routes/productRouter.js'
import authenticateUser from './middlewares/authenticate.js' 
import dotenv from 'dotenv'
dotenv.config()

const mongoUri =  process.env.MONGO_URI //"mongodb://admin:

mongoose.connect(mongoUri).then(
    ()=>{
        console.log("Connected to MongoDB")
    }
).catch(
    ()=>{
        console.error("Error connecting to MongoDB:")
    }
)




const app = express()

app.use( express.json() )

app.use(authenticateUser) 

app.use("/users", userRouter)
app.use("/products", productRouter)
 
app.listen( 3000 ,
    ()=>{
      console.log("Server is running!")  
    }
)