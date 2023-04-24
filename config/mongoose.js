const mongoose = require('mongoose');

const URI = "mongodb+srv://ronakvadodariya:Ronak1909@cluster0.6osqmxl.mongodb.net/test"

mongoose.connect(URI);

const db = mongoose.connection;

db.on('error',console.error.bind(console,'Error into coonect to the database'));

db.once('open',function()
{
    console.log("/////Database is connected sucessfully/////");
});
