
const mongoose= require('mongoose');
var url = 'mongodb://danh:kCMOCUyjhjF7f7DO@cluster0-shard-00-00-ueyln.mongodb.net:27017,cluster0-shard-00-01-ueyln.mongodb.net:27017,cluster0-shard-00-02-ueyln.mongodb.net:27017/ECWEB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';

mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true})
var Schema = mongoose.Schema;

var schema = new Schema({
    id: {type:Number, required: true},
    type: {type: String, required: true},
    cpath: {type: String, required: true}
});
module.exports = mongoose.model('categories', schema);