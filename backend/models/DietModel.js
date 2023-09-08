const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    title : String,
    duration : String,
    foodList : [{type : Types.ObjectId, ref: 'food'}],
    user : {type : Types.ObjectId, ref: 'users'},
    createdAt : Date,
});

module.exports = model( 'diet', myschema );