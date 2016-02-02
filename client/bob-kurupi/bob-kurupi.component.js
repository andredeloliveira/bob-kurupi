angular.module('bobKurupi').directive('bobKurupi', function(){
  return {
    restrict: 'E',
    templateUrl: 'client/bob-kurupi/bob-kurupi.html',
    controllerAs: 'bobKurupi',
    controller: function($scope, $reactive){
      $reactive(this).attach($scope);

      this.helpers({
        isLoggedIn: () => {
          return Meteor.userId() !== null;
        },
        currentUser: () => {
          return Meteor.user();
        }
      });
    }
  }
});
