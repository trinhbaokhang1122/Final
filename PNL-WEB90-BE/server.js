import express from 'express'
import mongoose from 'mongoose'
// import cors from 'cors'
import rootRouter from './Routes/index.js'
import 'dotenv/config'

const app = express()

app.use(express.json())

app.use('/api', rootRouter)

mongoose.connect(process.env.MONGO_URL)
 .then(console.log('MongoDB connected'))
 .catch((err) => console.error('Mongo connection error: ', err))

app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`)
})