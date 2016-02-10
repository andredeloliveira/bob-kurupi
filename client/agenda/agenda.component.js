angular.module('bobKurupi').directive('agenda', function(){
  return {
    restrict: 'E',
    templateUrl: 'client/agenda/agenda.html',
    controllerAs: 'agenda',
    controller: function($scope, $reactive){
      $reactive(this).attach($scope);

      /*subscribing the agenda collection to gather the data;*/
      this.subscribe('agenda');

      

      /*Helpers to show all the data acquired from the db*/
      this.helpers({
        agenda: function(){
          return Agenda.find({});
        }
      });


    }
  }
});
