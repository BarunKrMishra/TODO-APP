const  mongoose = require('mongoose');

require("dotenv").config();

const dbconnect = () => {
    mongoose.connect(process.env.DATABASE_url,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(()=>{console.log("db connect successfully");})
    .catch(()=>{console.log("issue in db connection");
        console.log(error.message);
        process.exit(1);//find this meaning
    });
}

module.exports = dbconnect;