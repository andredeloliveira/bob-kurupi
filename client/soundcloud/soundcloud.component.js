angular.module('bobKurupi').directive('soundcloud',function(){
  return {
    restrict: 'E',
    templateUrl: 'client/soundcloud/soundcloud.html',
    controllerAs: 'SoundCloud',
    controller: function($scope, $reactive){
      $reactive(this).attach($scope);
      /*Initializing Soundcloud API to get tracks from the author, in this case: Bob Kurupi. YAAY*/
      // SC.initialize({
      //   client_id : '790ae8652c42c656e79b42ccbb779d6a'
      // });
      // var track_url = 'http://soundcloud.com/forss/flickermood';
      // this.player = {};
      // this.player =  SC.oEmbed(track_url, { auto_play: false }).then(function(oEmbed) {
      //   console.log('oEmbed response: ', oEmbed);
      //   return oEmbed;
      // });
      //
      // console.log(this.player);

    }
  }
});
