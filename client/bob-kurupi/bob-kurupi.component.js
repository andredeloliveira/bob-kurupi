angular.module('bobKurupi').directive('bobKurupi', function(){
  return {
    restrict: 'E',
    templateUrl: 'client/bob-kurupi/bob-kurupi.html',
    controllerAs: 'bobKurupi',
    controller: function($scope, $reactive, $mdDialog){
      $reactive(this).attach($scope);

      this.subscribe('users');
      this.subscribe('images');
      this.subscribe('videos');
      this.helpers({
        isLoggedIn: () => {
          return Meteor.userId() !== null;
        },
        currentUser: () => {
          return Meteor.user();
        },
        images: () => {
          return Images.find({});
        },
        videos: () => {
          return Videos.find({});
        }
      });

      this.showImageDialog = (image) => {
        $mdDialog.show({
          locals: {
            image: image
          },
          templateUrl: 'client/bob-kurupi/image-dialog.html',
          clickOutsideToClose: true,
          controllerAs: 'imageDialog',
          controller: function editMusicaController( $scope, $reactive, $mdDialog, image) {

              $reactive(this).attach($scope);
              this.image = image;
              console.log(this.image);

              /*method that hides/closes the $mdDialog windos*/
              this.close = () => {
                $mdDialog.hide();
              };

          }
        });
      };


      this.logout = () => {
        Accounts.logout();
      };
    }
  }
});
