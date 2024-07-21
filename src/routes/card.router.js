const { getAll, create, getOne, remove, update } = require('../controllers/card.controller');
const express = require('express');

const routerCard = express.Router();

routerCard.route('/')
    .get(getAll)
    .post(create);

routerCard.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = routerCard;