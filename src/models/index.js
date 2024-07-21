const Card = require("./Card");
const User = require("./User");


Card.belongsTo(User) //userId
User.hasMany(Card)