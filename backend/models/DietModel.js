const {Schema, model} = require('../connection');

const myschema = new Schema({
    title : String,
    duration : String,
    foodList : Array,
    user : String,
    createdAt : Date,
});

module.exports = model( 'diet', myschema );