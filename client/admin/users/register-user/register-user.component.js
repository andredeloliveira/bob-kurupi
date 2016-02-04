angular.module('bobKurupi').directive('registerUser', function(){
  return {
    restrict: 'E',
    templateUrl: 'client/admin/users/register-user/register-user.html',
    controllerAs: 'registerUser',
    controller: function($reactive, $scope, $state){
      $reactive(this).attach($scope);

      /*credentials for the login. All the data that fills this object are in the view(register-user.html)*/
      this.credentials = {
        email: '',
        password: '',
        profile: {
          nome: ''
        }
      };

      /*Funtion that register the new user as an e-mail user;*/
      this.register = () => {
        Accounts.createUser(this.credentials, (err) => {
          if(err){
            this.error = err;
            console.log(this.error);
          }else {
            $state.go('home');
          }
        });
      };
    }
  }
});
