angular.module('bobKurupi').directive('adminMusicas', function(){
  return {
    restrict: 'E',
    templateUrl: 'client/admin/musica/admin-musicas.html',
    controllerAs: 'adminMusicas',
    controller: function($reactive, $scope, $q, $state, $mdDialog){
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
            return Meteor.user();
          },
          musicas: () => {
            return Musicas.find({});
          }

      });

      /*initialization of the 'musica' blank object*/
      this.musica = {
        nome: '',
        descricao: '',
        youtube: '',
        spotify: '',
        soundcloud: ''
      };

      /*Add a new song in the the list of music;*/
      this.addMusica = () => {
        Musicas.insert(this.musica);
      };
      /*delete a song from the list of music*/
      this.deleteMusica = (musica) => {
        if(!musica){
          console.error('impossível remover música. Id inválido');
        }
          Musicas.remove({_id: musica._id});
          console.log('chegou aqui');
      };

      /*Toggle  a $mdDialog that updates the current value of the array of 'musicas' on this.musicas*/
      this.toggleEdit = (musica) => {
        $mdDialog.show({
          locals: {
            musica: musica
          },
          templateUrl: 'client/admin/musica/edit-musica.html',
          clickOutsideToClose: true,
          controllerAs: 'editMusica',
          controller: function editMusicaController( $scope, $reactive, $state, $mdDialog, musica) {

              $reactive(this).attach($scope);
              this.musica = musica;
              console.log(this.musica);

              /*method that hides/closes the $mdDialog windos*/
              this.close = () => {
                $mdDialog.hide();
              };

              /*Update reactivelly the 'musica' inside the $mdDialog service*/
              this.updateMusica = () => {

                Musicas.update({_id: musica._id}, {
                $set: {
                  'nome': this.musica.nome,
                  'descricao': this.musica.descricao,
                  'youtube': this.musica.youtube,
                  'soundcloud': this.musica.soundcloud,
                  'spotify': this.musica.spotify
                  }
                });
                this.close();
              };
          }
        });
      };
    }
  }
});
