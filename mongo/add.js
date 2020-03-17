/*const mongoose= require('mongoose');

    Tank.find({},{type: 1, _id:0},function (err, kittens) {
    if (err) return console.error(err);
    console.log(kittens);
  
  })
  */
 var danh = require('./danh');
 var express = require('express');
 var mongoose = require('mongoose');
 var assert = require('assert');
 var url = 'mongodb://danh:kCMOCUyjhjF7f7DO@cluster0-shard-00-00-ueyln.mongodb.net:27017,cluster0-shard-00-01-ueyln.mongodb.net:27017,cluster0-shard-00-02-ueyln.mongodb.net:27017/ECWEB?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority';
mongoose.connect(url, {useNewUrlParser: true, useUnifiedTopology: true}, function(err, db)
{
danh.find({},function(err,result) {
  console.log(result);
});
});