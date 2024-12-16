import express from 'express'
import cors from 'cors'



// app config
const app =  express()
const PORT = 4000;

//middleware
app.use(express.json())
app.use(cors())

app.get("/", (req , res)=>{
    res.send("API Working")
})

app.listen(PORT, ()=>{
    console.log(`Server started on http://localhost:${PORT}`)
})

// mongodb+srv://iamuditagrawal:10691069@cluster0.74an9.mongodb.net/?