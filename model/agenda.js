Agenda = new Mongo.Collection("agenda");

Agenda.allow({
  insert: function(userId){
    return userId ;
  },
  update: function(userId){
    return userId ;
  },
  remove: function(userId){
    return userId ;
  }

});
