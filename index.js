import express from 'express'
import mongoose from 'mongoose'
import userRouter from './routes/userRouter.js'
import productRouter from './routes/productRouter.js'
import authenticateUser from './middlewares/authenticate.js' 

const mongoUri = "mongodb://admin:1234@ac-vdnxan6-shard-00-00.0hwgg1g.mongodb.net:27017,ac-vdnxan6-shard-00-01.0hwgg1g.mongodb.net:27017,ac-vdnxan6-shard-00-02.0hwgg1g.mongodb.net:27017/?ssl=true&replicaSet=atlas-z9tm9o-shard-0&authSource=admin&appName=Cluster0"

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