const express = require('express');
const routerCard = require('./card.router');
const routerUser = require('./user.router');
const router = express.Router();

// colocar las rutas aquí
router.use("/card", routerCard);
router.use("/user", routerUser)

module.exports = router;