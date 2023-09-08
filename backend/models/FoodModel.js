const {Schema, model, Types} = require('../connection');

const myschema = new Schema({
    name : String,
    description : String,
    calories : Number,
    user: {type : Types.ObjectId, ref: 'users'}
});

module.exports = model( 'food', myschema );