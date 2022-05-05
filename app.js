const express = require("express");
const app = express();
const {tasks} = require("./routes/task.js");
const port= 3000;
//middleware 
app.use(express.json());


app.get('/',(req,res)=>{
    res.send("all set!")
})

app.use('/api/v1/tasks',tasks);











app.listen(port,console.log(`server started @ http://localhost:${port}/api/v1/tasks`));