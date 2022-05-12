require('dotenv').config();
require('./db/tasks')
const express = require("express");
const notFound = require('./middlewares/error-404');
const errorHandlerMiddleware = require('./middlewares/error-handler')
const connectDB = require(__dirname+'/db/tasks')
const app = express();
const tasks = require(__dirname+"/routes/tasks");
const port= process.env.PORT||3000;
//middleware 
app.use(express.json());
app.use(express.static('./public'));
app.use('/api/v1',tasks);
app.use('/',errorHandlerMiddleware);
app.use(notFound);
async function start(){
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port,console.log(`server started @ http://localhost:${port}/api/v1/tasks`));
    }
    catch(err){
        console.log(err);
    }
}

start();