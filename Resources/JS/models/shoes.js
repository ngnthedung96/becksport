var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/becksport_dev";
const shoesModal = {
  MongoClient,
  url
}


module.exports = shoesModal;