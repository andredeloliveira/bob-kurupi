Meteor.publish("agenda", function(){
  return Agenda.find({});
});
