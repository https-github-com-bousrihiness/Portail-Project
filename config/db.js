const mongoose = require("mongoose");

mongoose
    .connect('mongodb://127.0.0.1:27017/Tours-Project',
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log("failed to connect to MongoDB", err));


