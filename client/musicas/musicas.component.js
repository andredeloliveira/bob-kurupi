angular.module('bobKurupi').directive('musicas', function(){
  return {
    restrict: 'E',
    templateUrl: 'client/musicas/musicas.html',
    controllerAs: 'Musicas',
    controller: function($scope, $reactive){
      $reactive(this).attach($scope);
      this.newMusica = {};
      this.perPage = 5;
      this.page = 1;
      this.orderProperty = '1';
      this.searchText = '';
      this.sort = {
        name: 1
      };
      this.subscribe("musicas");

      console.log($scope.musicas);
      this.pageChanged = (newPage) => {
        this.page = newPage;
      };

      this.helpers({
        musicas: () => {
          return Musicas.find({});
        },
        isLoggedIn: () => {
          return Meteor.userId();
        },
        currentUserId: () => {
          return Meteor.userId();
        }
      });



    }
  }
});
