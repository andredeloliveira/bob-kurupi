angular.module('bobKurupi').directive('adminVideos', function(){
  return {
    restrict: 'E',
    templateUrl: 'client/admin/videos/admin-videos.html',
    controllerAs: 'adminVideos',
    controller: function($scope, $reactive, $mdDialog){
      $reactive(this).attach($scope);


      this.video = {
          nome: '',
          videoId: ''
      };

      this.subscribe('videos');

      this.helpers({
          videos: () => {
            return Videos.find({});
          }
      });
      console.log(this.videos);

      /*method to add a new video*/
      this.addVideo = () => {
        Videos.insert(this.video);
        this.video = {
          nome: '',
          videoId: ''
        };
      };

      /*method that removes a video*/
      this.deleteVideo = (video) => {
        Videos.remove({_id: video._id});;
      };
      /*method do toggle a new dialog to edit a certain video*/
      /*Toggle  a $mdDialog that updates the current value of the array of 'musicas' on this.musicas*/
      this.toggleEdit = (video) => {
        $mdDialog.show({
          locals: {
            video: video
          },
          templateUrl: 'client/admin/videos/edit-video.html',
          clickOutsideToClose: true,
          controllerAs: 'editVideo',
          controller: function editVideoController( $scope, $reactive, $state, $mdDialog, video) {

              $reactive(this).attach($scope);
              this.video = video;
              console.log(this.video);

              /*method that hides/closes the $mdDialog windos*/
              this.close = () => {
                $mdDialog.hide();
              };

              /*Update reactivelly the 'video' inside the $mdDialog service*/
              this.updateVideo = () => {

                Videos.update({_id: video._id}, {
                $set: {
                  'nome': this.video.nome,
                  'videoId': this.video.videoId
                  }
                });
                this.close();
              };
          }
        });
      };

    }
  }
});
