const express = require("express")
const connectDB = require("./config/dbconfig")
const userRoutes = require("./Routes/UserRoute")
const logger = require('./Middlewares/logger')
require('dotenv').config();
const app = express()
const PORT = process.env.PORT || 3000;
connectDB();
app.use(express.json())
app.use(logger)
app.use('/api/users', userRoutes)
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`
    )
})
