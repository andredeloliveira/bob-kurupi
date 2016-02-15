angular.module('bobKurupi').directive('adminImagens', function(){
  return {
    restrict: 'E',
    templateUrl: 'client/admin/imagens/admin-imagens.html',
    controllerAs: 'adminImagens',
    controller: function($scope, $reactive, $q, $mdDialog){
      $reactive(this).attach($scope);

      this.subscribe("images");
      this.tempImages = undefined;
      this.files  = [];
      /*helpers that return data from the database*/
      this.helpers({
        images: () => {
          return Images.find({});
        }
      });

      /*method to save the tempCropped image/s*/
      this.saveCroppedImage = () => {
        if(this.myCroppedImage !== ''){
          Images.insert(this.myCroppedImage, (err, fileObj) => {
            if(!this.tempImages){
              this.tempImages = [];
            }
            this.tempImages.push(fileObj);
            this.cropImgSrc = undefined;
            this.myCroppedImage = '';
          })
        }
      };
      /*method to add images to the database*/
      this.addImages = (files) => {
        if(!Roles.userIsInRole(Meteor.user(), ['admin'], 'banda')){
          throw new Meteor.Error(403,"Access denied");
        }
        if(files.length > 0){
          var reader = new FileReader();
          reader.onload = (e) => {
            $scope.$apply(() => {
              this.cropImgSrc = e.target.result;
              this.myCroppedImage = '';
            });
          };
          reader.readAsDataURL(files[0]);
        }else {
          this.cropImgSrc = undefined;
        }
      };
      /*method to remove a selected image form the database*/
      this.removeImage = (image) => {
        if(!Roles.userIsInRole(Meteor.user(), ['admin'], 'banda')){
          throw new Meteor.Error(403,"Access denied");
        }
        Images.remove({_id: image._id});
      }
    }
  }
});
