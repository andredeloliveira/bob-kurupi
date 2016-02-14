
/*Instance of the central module of the application:
  -----
  Decription:
  'angular-meteor' - for the integration with meteor !important
  'ui.router' - router for the URLs
  'accounts-ui' - for the Meteor.accounts package. (UI)
  'uiGmapgoogle-maps' for the integration with google maps
  'ngMaterial' - for angular material
  'scDateTime'- for the DateTime picker
*/
angular.module('bobKurupi', ['angular-meteor', 'ui.router', 'accounts.ui',
'uiGmapgoogle-maps','ngMaterial','ngFileUpload', 'ngImgCrop', 'youtube-embed','angularUtils.directives.dirPagination']);

/*configuration for GoogleAPI provider, which the key and other libraries are set*/
angular.module('bobKurupi').config(function(uiGmapGoogleMapApiProvider){
  uiGmapGoogleMapApiProvider.configure({
    key: 'AIzaSyCM6K5wH7Hw7u714n08BF4pdESJpDck85Q',
    v: '3.20',
    libraries: 'weather,geometry,visualization'
  });
});
