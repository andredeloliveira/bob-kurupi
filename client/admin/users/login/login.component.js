angular.module('bobKurupi').directive('login', function(){
  return {
    restrict: 'E',
    templateUrl: 'client/admin/users/login/login.html',
    controllerAs: 'login',
    controller: function($scope, $reactive, $state){
      $reactive(this).attach($scope);

      this.credentials = {
        email: '',
        password: ''
      };
      this.error = '';

      this.login = () => {
        Meteor.loginWithPassword(this.credentials.email, this.credentials.password, (error) => {
          if(error){
            this.error = error;
          }
          else {
            $state.go('home');
          }
        });
      };
      //end of the controller
    }
  }
});
