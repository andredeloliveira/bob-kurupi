angular.module('bobKurupi').directive('adminAgenda', function(){
  return {
    restrict: 'E',
    templateUrl: 'client/admin/agenda/admin-agenda.html',
    controllerAs: 'adminAgenda',
    controller: function($scope, $reactive){
      $reactive(this).attach($scope);

      this.subscribe('agenda');
      this.helpers({
        isLoggedIn: () => {
          return Meteor.userId();
        },
        agenda: () => {
          return Agenda.find({});
        }
      });

      /*add a new event on the agenda*/
      this.addEvento = (evento) => {
        if(!evento){
          console.error('evento inválido ou em branco');
        }
        Agenda.insert(evento);
      };
      /*delete a event on the agenda*/
      this.deleteEvento = (eventoId) => {
        if(!eventoId){
          console.error('evento inválido ou em branco');
        }
        Agenda.remove({_id: eventoId});
      };
    }
  }
})
