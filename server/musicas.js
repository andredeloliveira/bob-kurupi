Meteor.publish("musicas", function () {

  return Musicas.find({});
});
