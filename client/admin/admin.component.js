angular.module('bobKurupi').directive('admin', function(){
  return {
    restrict: 'E',
    templateUrl: 'client/admin/admin.html',
    controllerAs: 'admin',
    controller: function($scope, $reactive, $q, $state){
      $reactive(this).attach($scope);

      /*
        Variable to help on the selection of the actions.
        0 - show nothing.
        1 - show Musicas Admin directive,
        2 - show Agenda Admin directive
      */
      this.showAdmin = 0;

      /*Verify what option was chosen*/
      this.showAdminOption = (option) =>{
        return option === this.showAdmin;
      };

      /*Method that shows the CRUD for musicas*/
      this.goMusicasAdmin = () => {
          this.showAdmin = 1;
      };
      /*Method that shows the CRUD for agenda*/
      this.goAgendaAdmin = () => {
        this.showAdmin = 2;
      };
      /*Method that shows the CRUD for imagens*/
      this.goImagens = () => {
        this.showAdmin = 3;
      };
      /*Method that shows the CRUD for Vídeos*/
      this.goVideos = () => {
        this.showAdmin = 4;
      }


    }
  }
});
