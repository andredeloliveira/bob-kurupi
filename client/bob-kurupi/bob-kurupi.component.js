angular.module('bobKurupi').directive('bobKurupi', function(){
  return {
    restrict: 'E',
    templateUrl: 'client/bob-kurupi/bob-kurupi.html',
    controllerAs: 'bobKurupi',
    controller: function($scope, $reactive, $mdDialog, $mdSidenav, $timeout){
      $reactive(this).attach($scope);

      this.perPage = 20;
      this.page = 1;
      this.sort = {
        createdAt: 1
      };
      this.subscribe('users');
      this.subscribe('images', () => {
        return [
          {
            limit: parseInt(this.perPage),
            skip: parseInt((this.getReactively('page') -1 ) * this.perPage),
            sort: this.getReactively('sort')
          }
        ]
      });
      this.subscribe('videos');
      this.helpers({
        isLoggedIn: () => {
          return Meteor.userId() !== null;
        },
        currentUser: () => {
          return Meteor.user();
        },
        images: () => {
          return Images.find({}, {sort: this.getReactively('sort')});
        },
        videos: () => {
          return Videos.find({});
        },
        imagesCount: () => {
          return Counts.get('numberOfImages');
        }
      });
      this.isAdmin = () => {
        return Meteor.user().admin;
      };
      this.isLeftMenuOpen = () => {
        return $mdSidenav('left').isOpen();
      };

      this.pageChanged = (newPage) => {
        this.page = newPage;
      }
      /*opens the leftmenu*/
      this.openLeftMenu = () => {
        $mdSidenav('left').toggle();
      };
      /*closes the let menu*/
      this.closeLeftMenu = () => {
        $mdSidenav('left').close();
      };
      /*shows the image in a dialog, making it possible to close aftwards*/
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

      /*Logout action*/
      this.logout = () => {
        Accounts.logout();
      };




    }
  }
});
