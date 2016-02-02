Musicas = new Meteor.Collection("musicas");

Musicas.allow({
  insert: function(userId, musica){
    return userId && musica.owner === userId;
  },
  update: function(userId, musica){
    return userId && musica.owner === userId;
  },
  remove: function(userId, usica){
    return userId && musica.owner === userId;
  }
});
