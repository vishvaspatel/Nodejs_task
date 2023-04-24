const data = require('../models/model');

//First: Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
module.exports.first = async function(req,res)
{
    let res_data = await data.find({income : {'$lt': 5},car: { $in: ["BMW", "Mercedes-Benz"] }});
    return res.json ({res_data});
}

//Second: Male Users which have phone price greater than 10,000.
module.exports.second = async function(req,res)
{
    let res_data = await data.find({gender : "Male",phone_price : {'$gt' : 10000}});
    return res.json ({res_data});
}

//Third : Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
module.exports.third = async function(req,res)
{
    let res_data = await data.find({last_name: { $regex: /^M/ },email: { $regex: new RegExp('^.*M.*' + '$', 'i') }, quote: { $exists: true, $type: 'string', $regex: /^.{16,}$/ }});
    return res.json ({res_data});
}

//fourth :  Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
module.exports.fourth = async function(req,res)
{
    let res_data = await data.find( {$and: [
        { car: { $in: ["BMW", "Mercedes-Benz", "Audi"] } },
        { email: { $not: { $regex: /\d/ } } }
      ]})
return res.json ({res_data});
}

//fifth :  Show the data of top 10 cities which have the highest number of users and their average income.
module.exports.fifth = async function(req,res)
{
   let res_data = await data.aggregate([{ $group: {
    _id: '$city',
    count: { $sum: 1 },
    income: { $avg: '$income' }
  }
},
{ $sort: { count: -1 } },
{ $limit: 10 }
])
return res.json ({res_data});
}