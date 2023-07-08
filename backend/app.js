const express = require('express');
const morgan = require('morgan');
const { errorHandler } = require('./middleware/errorhandler');
const cors = require('cors')
require('express-async-errors');
require('dotenv').config();
require('./db')

const app = express()
app.use(express.json())
app.use(cors())
app.use(morgan('dev'));

const PORT = 8000 || process.env.PORT


app.get('/',(req,res)=>{
    res.send(`
        <h1>yogavar Api</h1>
        <p>Use /api/user/ </p>
    `)
})


const userRouter = require('./routes/user');
const mentorRouter = require('./routes/mentor');
const courseRouter = require('./routes/course');
const { handleNotFound } = require('./utils/helper');

//prefix Api
app.use('/api/user', userRouter);
app.use('/api/mentor', mentorRouter);
app.use('/api/course', courseRouter);


app.use('/*',handleNotFound)

//async error handling
app.use(errorHandler);

//listning
app.listen(PORT,()=>{
    console.log(`🚀 Server is running at https://localhost:${PORT}`);
})