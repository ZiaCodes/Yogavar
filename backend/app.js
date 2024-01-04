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

const newsLetterRouter = require('./routes/newsLetter');
const userRouter = require('./routes/user');
const mentorRouter = require('./routes/mentor');
const coursesRouter = require('./routes/courses');
const userAccountSettings = require('./routes/userAccountSettings');
const tslVendor = require('./routes/vendor');
const tslTickets = require('./routes/tickets');
const { handleNotFound } = require('./utils/helper');

//prefix Api 
app.use('/api/user', userRouter);
app.use('/api/mentor', mentorRouter);
app.use('/api/courses', coursesRouter);
app.use('/api/newsletter',newsLetterRouter);
app.use('/api/setting',userAccountSettings);
app.use('/api/vendor',tslVendor);
app.use('/api/tickets',tslTickets);



// Swagger UI Doc set-up 
fs = require('fs')
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swaggerApi/swagger.json');
const customCss = fs.readFileSync((process.cwd()+"/swaggerApi/swagger.css"), 'utf8');
app.use('/yogavar-swagger/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument, {customCss}));


app.use('/*',handleNotFound)

//async error handling
app.use(errorHandler);

//listning
app.listen(PORT,()=>{
    console.log(`🚀 Server is running at http://localhost:${PORT}`);
})