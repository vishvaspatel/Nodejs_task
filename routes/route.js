const controller = require('../controllers/controller');
const express = require('express');
const router = express.Router();

//First: Users which have income lower than $5 USD and have a car of brand “BMW” or “Mercedes”.
router.get('/first',controller.first);

//Second: Male Users which have phone price greater than 10,000.
router.get('/second',controller.second);

//Third : Users whose last name starts with “M” and has a quote character length greater than 15 and email includes his/her last name.
router.get('/third',controller.third);

//fourth :  Users which have a car of brand “BMW”, “Mercedes” or “Audi” and whose email does not include any digit.
router.get('/fourth',controller.fourth);

//fifth :  Show the data of top 10 cities which have the highest number of users and their average income.
router.get('/fifth',controller.fifth);

module.exports = router;