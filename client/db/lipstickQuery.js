var MongoClient = require('mongodb').MongoClient;

var LipstickQuery = function(){
  this.url = "mongodb://localhost:27017/cosmetics";
};

LipstickQuery.prototype = {
  all: function(callback){
    MongoClient.connect(this.url, function(err, db){
      var collection = db.collection('maclipstick');
      collection.find().toArray(function(err, result){
        callback(result);
      });
    });
  },
  add: function(lipstickToAdd, callback){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection('maclipstick');
        collection.insert(lipstickToAdd);
        collection.find().toArray(function(err, results){
          callback(results);
        });
      };
    });
  }
}

module.exports = LipstickQuery;