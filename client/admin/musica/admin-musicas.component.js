angular.module('bobKurupi').directive('adminMusicas', function(){
  return {
    restrict: 'E',
    templateUrl: 'client/admin/admin-musicas.html',
    controllerAs: 'adminMusicas',
    controller: function($reactive, $scope, $q){
      $reactive(this).attach($scope);


      /*subscribe methods, that allow the MiniMongo to be accessed*/
      this.subscribe('musicas');
      this.subscribe('agenda');
      this.subscribe('users');

      /*helpers that gather the data to the $scope variable (as well as this)*/
      this.helpers({
          isLoggedIn: () => {
            return Meteor.userId();
          },
          isAdmin: () => {
            return Meteor.user().profile.admin;
          },
          musicas: () => {
            return Musicas.find({});
          }
      });


      /*Add a new song in the the list of music;*/
      this.addMusica = (musica) => {
        if(!musica){
          console.error('Música inválida ou em branco');
        }
        Musicas.insert(musica);
      };
      /*delete a song from the list of music*/
      this.deleteMusica = (musicaId) => {
        if(!musicaId){
          console.error('impossível remover música. Id inválido');
        }
          Musicas.remove({_id: musicaId});
      };

    }
  }
});
