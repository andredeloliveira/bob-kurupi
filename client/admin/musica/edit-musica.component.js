angular.module('bobKurupi').directive('editMusica', function(){
  return {
    restrict: 'E',
    templateUrl: 'client/admin/musica/edit-musica.html',
    controllerAs: 'editMusica',
    controller: function( $scope, $reactive, $state, $mdDialog) {


      this.closeDialog = () =>{
          $mdDialog.close();
      };



      this.musica = 'musica';

      this.updateMusica = () => {

          Parties.update({_id: musica._id}, {
          $set: {
            'nome': this.musica.nome,
            'descricao': this.musica.descricao,
            'youtube': this.musica.youtube,
            'soundcloud': this.musica.soundcloud,
            'spotify': this.musica.spotify
          }
        });
      };
    }
  }
});
