angular.module('bobKurupi').directive('agendaDetalhes', function(){
  return {
    restrict: 'E',
    templateUrl: 'client/agenda-detalhes/agenda-detalhes.html',
    controllerAs: 'agendaDetalhes',
    controller: function($scope, $reactive, $stateParams, $location){
      'use strict';
      $reactive(this).attach($scope);
      this.loaded = false;
      this.eventoId = $stateParams.eventoId;
      this.subscribe('agenda');
      this.helpers({
        evento: () => {
          return Agenda.findOne(this.eventoId);
        },
        currentUser: () => {
          return Meteor.user();
        }
      });

      /*Coords come from the URL as well. Using the $location service
      it is possible to use the data to generate the map.
      The reason is that the map does not load, because of the async
      behaviour of the helpers (which is good to be).
      Though, it is necessary to not crash the page and still get the right data.
      The need for this is when the user just copy the URL or refreshes the page.
      This way, it is not granted that the object will be binded into the client
      from the database until the loding time. So, to be sure that the response will
      be always valid, the $location service is used, to gather the URL objects needed.
      It this case, the coordinates to generate the map.
      */
      this.coords = $location.search();
      //for the map label


      /*map object*/

        this.map = {
          center: {
            latitude: this.coords.latitude,
            longitude: this.coords.longitude
          },
          zoom: 16,
          events: {},
          marker: {
            options: {
              draggable: false,
              label: this.coords.label,
              title: this.coords.label
            },
            events: {
              dragend: (marker,eventName, args) => {
                var lat = marker.getPosition().lat();
                var lon = marker.getPosition().lng();
              }
            },
            title: this.coords.label
          }
        };


    }
  }
});
