const mongoose = require("mongoose");

const sample_data = new mongoose.Schema(
    {
        id :{
            type : Number
        },
        first_name:{
            type : String
        },
        last_name:{
            type : String
        },
        email :{
            type : String
        },
        gender :{
            type : String
        },
        income:{
            type : Number
        },
        city:{
            type : String
        },
        car:{
            type : String
        },
        quote : {
            type : String
        },
        phone_price : {
            type : Number
        }
    }
);

const Sample_data = mongoose.model("Sample Data", sample_data);

module.exports =Sample_data;