const express=require("express");
const cors=require("cors");
const { connection } = require("./config/dbConnect");
const { employeAuthRoute } = require("./routes/employeAuhtRoute");
const { crmRouter } = require("./routes/crmRoute");
const { notFound, errorHandler } = require("./midilewares/errorMiddleware");
const app=express();
app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Base point of API")
})

app.use("/api/auth",employeAuthRoute)
app.use("/api",crmRouter)
app.use(notFound)
app.use(errorHandler)
const port=8080;
app.listen(port,async()=>{
    try {
        await connection
        console.log(`Data base is connected`)
    } catch (error) {
        console.error(`Data base is not connected`)
    }
    console.log(`server is running over ${port}`)
})