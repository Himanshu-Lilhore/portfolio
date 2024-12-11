require('dotenv').config()
const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/db')
const PORT = process.env.PORT
const stateRouter = require('./routes/stateRouter')
const messageRouter = require('./routes/messageRouter')

const app = express();
connectDB()

app.use(express.json())
app.use(cors({
    origin: function (origin, callback) {
        if (!origin ||
            origin.startsWith(process.env.FRONTEND_URL)) {
            callback(null, true)
        } else {
            console.log("Blocked by CORS:", origin);
            callback(new Error('Not allowed by CORS'))
        }
    },
    credentials: true
}));

app.use('/state', stateRouter)
app.use('/message', messageRouter)



app.listen(PORT, () => {
    console.log("server is running on :", PORT)
})