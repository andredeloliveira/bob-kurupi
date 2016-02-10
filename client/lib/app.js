
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
'uiGmapgoogle-maps','ngMaterial', 'scDateTime','ngFileUpload', 'ngImgCrop']);
