const express = require('express');
const bodyParser= require('body-parser')
const userRoutes = require('./routes/userRoutes');
require('dotenv').config({ path: './config/.env' });
//DataBase
require('./config/db')
const app = express();


app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: false }))
//Routes 
app.use('/api/user',userRoutes)




//Server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
});









// const adminRouter = require('./server/routes/adminRoutes')
// const guestRouter = require('./server/routes/guestRoutes');
// const loginRouter=require('./server/routes/loginRoute');
// const encadrantRouter=require('./server/routes/encadrantRoutes');
// const topicRouter=require('./server/routes/topicRoutes');
// const taskRouter=require('./server/routes/taskRoutes');




// //routes
// app.use('/', router);
// app.use('/guests', guestRouter);
// app.use('/admin',adminRouter);
// app.use('/login',loginRouter);
// app.use('/encadrant',encadrantRouter);
// app.use('/topic',topicRouter);
// app.use('/task',taskRouter);

