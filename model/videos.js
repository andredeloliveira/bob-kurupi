Videos = new Mongo.Collection("videos");

Videos.allow({
  insert: function(userId){
    return userId;
  },
  update: function(userId){
    return userId;
  },
  remove: function(userId){
    return userId;
  }
});
