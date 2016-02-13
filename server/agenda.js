Meteor.publish("agenda", function(){
  return Agenda.find({});
});
Meteor.publish("evento", function(eventoId){
  return Agenda.findOne({_id: eventoId});
});
