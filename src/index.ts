import express,  {Express, Request, Response} from "express"
import dotenv from"dotenv"
dotenv.config()
const port=process.env.port
const app:Express=express()
app.use(express.json())
app.get("/",(req,res)=>{
    res.json(`i am conected to port ${port} here`)
})
app.listen(port,()=>{ 
    console.log("my app is now running on port "+port)
}) 
