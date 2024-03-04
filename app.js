const express = require('express');
const app = express();
const tasks = require('./routes/tasks');
const connectDB = require('./db/connection')
require('dotenv').config();

app.use(express.json());
app.use("/api/v1/tasks", tasks);


const port = 5000
const start = async() => {
    try {
        await connectDB(process.env.MONGODB)
        app.listen(port, console.log(`server is listing on port ${port}`))
    } catch (err) {
        console.log(err);
    }

}

start()