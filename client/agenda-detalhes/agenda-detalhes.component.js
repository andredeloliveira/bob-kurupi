angular.module('bobKurupi').directive('agendaDetalhes', function(){
  return {
    restrict: 'E',
    templateUrl: 'client/agenda-detalhes/agenda-detalhes.html',
    controllerAs: 'agendaDetalhes',
    controller: function($scope, $reactive, $stateParams){
      $reactive(this).attach($scope);

      this.subscribe('agenda');

      this.helpers({
        evento: () => {
          return Agenda.findOne({_id: $stateParams.eventoId});
        }
      });
      console.log(this.evento);
      /*map object*/
      this.map = {
        center: {
          latitude: this.evento.map.latitude,
          longitude: this.evento.map.longitude
        },
        zoom: 16,
        events: {},
        marker: {
          options: {
            draggable: false,
            label: this.evento.nome,
            title: this.evento.nome
          },
          events: {
            dragend: (marker,eventName, args) => {
              var lat = marker.getPosition().lat();
              var lon = marker.getPosition().lng();
            }
          },
          position: this.evento.map,
          title: this.evento.nome
        }
      };


    }
  }
});
