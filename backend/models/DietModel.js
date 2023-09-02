const {Schema, model} = require('../connection');

const myschema = new Schema({
    title : String,
    Duration : String,
    FoodList : Array,
    user : String,
    avatar : String,
    createdAt : Date,
});

module.exports = model( 'diet', myschema );