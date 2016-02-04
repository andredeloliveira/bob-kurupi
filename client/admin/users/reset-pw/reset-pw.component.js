angular.module('bobKurupi').directive('resetpw', function(){
  return {
    restrict: 'E',
    templateUrl: 'client/admin/users/resetpw/reset-pw.html',
    controllerAs: 'resetpw',
    controller: function($scope, $reactive, $state){
      $reactive(this).attach($scope);

      this.credentials = {
        email: ''
      };
      this.error = err;

      this.reset = () => {
        Accounts.forgotPassword(this.credentials, (error) => {
          if(error){
            this.error = err;
          }else {
            $state.go('home');
          }
        });
      };

    }
  }

});
