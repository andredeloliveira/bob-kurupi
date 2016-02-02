Agenda = new Meteor.Collection("agenda");

Agenda.allow({
  insert: function(userId, itemAgenda){
    return userId && itemAgenda.owner === userId;
  },
  update: function(userId, itemAgenda){
    return userId && itemAgenda.owner === userId;
  },
  remove: function(userId, itemAgenda){
    return userId && itemAgenda.owner === userId;
  }

});
