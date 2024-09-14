import express from 'express'
const app=express()
import 'colors'
import userRoutes from './routes/userRoutes.js'
import { dbConnect } from './database/dbConnect.js'

app.use(express.static('./public'))
app.use(express.json())

app.use('/api/v1/wazir',userRoutes)

app.listen(4000,()=>{
    console.log("Server listening on port 4000".bgBlue.bold);
},()=>{
    dbConnect();
    console.log("Database connected".bgMagenta.bold)
})