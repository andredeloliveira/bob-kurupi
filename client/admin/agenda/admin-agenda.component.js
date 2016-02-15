angular.module('bobKurupi').directive('adminAgenda', function(){
  return {
    restrict: 'E',
    templateUrl: 'client/admin/agenda/admin-agenda.html',
    controllerAs: 'adminAgenda',
    controller: function($scope, $reactive, $mdDialog){
      $reactive(this).attach($scope);

      this.subscribe('agenda');



      this.helpers({

        eventos: () => {
          return Agenda.find({});
        }
      });

      this.evento = {
        nome: '',
        descricao: '',
        cidade:'',
        map: {
          latitude: '',
          longitude: ''
        },
        data: '',
        preco: '',
        facebook: ''
      };
      /*add a new event on the agenda*/
      this.addEvento = () => {
        if(!Roles.userIsInRole(Meteor.user(), ['admin'], 'banda')){
          throw new Meteor.Error(403,"Access denied");
        }
        if(this.evento.nome === ''){
          console.error('o evento precisa de pelo menos um nome.')
          return;
        }
        /*transform the coordenates into an object with separated lat and long*/

        console.log(this.evento);
        Agenda.insert(this.evento);
        this.evento = {
          nome: '',
          descricao: '',
          cidade: '',
          map: {
            latitude: '',
            longitude: ''
          },
          data: '',
          preco: '',
          facebook: ''
        };
      };
      /*delete a event on the agenda*/
      this.deleteEvento = (evento) => {
        if(!Roles.userIsInRole(Meteor.user(), ['admin'], 'banda')){
          throw new Meteor.Error(403,"Access denied");
        }
        Agenda.remove({_id: evento._id});
      };

      /*Toggle  a $mdDialog that updates the current value of the array of 'eventos' on this.eventos*/
      this.toggleEdit = (evento) => {
        if(!Roles.userIsInRole(Meteor.user(), ['admin'], 'banda')){
          throw new Meteor.Error(403,"Access denied");
        }
        $mdDialog.show({
          locals: {
            evento: evento
          },
          templateUrl: 'client/admin/agenda/edit-evento.html',
          clickOutsideToClose: true,
          controllerAs: 'editEvento',
          controller: function editEventoController( $scope, $reactive, $state, $mdDialog, evento) {

              $reactive(this).attach($scope);
              this.evento = evento;

              /*method that hides/closes the $mdDialog windos*/
              this.close = () => {
                $mdDialog.hide();
              };

              /*Update reactivelly the 'evento' inside the $mdDialog service*/
              this.updateEvento = () => {

                Agenda.update({_id: evento._id}, {
                $set: {
                  'nome': this.evento.nome,
                  'descricao': this.evento.descricao,
                  'map': this.evento.map,
                  'data': this.evento.data,
                  'preco': this.evento.preco,
                  'facebook': this.evento.facebook,
                  'cidade': this.evento.cidade
                  }
                });
                console.log('done! EVento updated');
                this.close();
              };
          }
        });
      };
    }
  }
})
