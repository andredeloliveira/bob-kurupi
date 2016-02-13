Musicas = new Mongo.Collection("musicas");

/*Permissions for the collection. Here are all the permissions for who can do what.*/
Musicas.allow({
  insert: function(userId){
    return userId ;
  },
  update: function(userId){
    return userId;
  },
  remove: function(userId){
    return userId;
  }
});
