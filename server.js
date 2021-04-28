const express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const cors = require('cors');



require('dotenv').config({ path: './config/.env' });
require('./config/db');
const { checkUser, requireAuth } = require ('./middleware/authMiddleware');
const app = express();

const userRoutes = require('./routes/userRoutes');
const randonneeRoutes = require('./routes/randonneeRoutes');




app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cors());
app.use(cookieParser());

// jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req,res)=>{
    res.status(200).send(res.locals.user._id)
})


//Routes 
app.use('/api/randonnee',randonneeRoutes);
app.use('/api/user',userRoutes)



//Server
app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`)
});

