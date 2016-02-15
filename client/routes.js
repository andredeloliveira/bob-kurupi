angular.module('bobKurupi')
  .config(function ($urlRouterProvider, $stateProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('home', {
        url: '/',
        template: ''
      })
      .state('musicas', {
        url: '/musicas',
        template: '<musicas></musicas>',
      })
      .state('agenda-detalhes', {
        url: '/agenda/:eventoId',
        template: '<agenda-detalhes></agenda-detalhes>'
      })
      .state('agenda',{
        url: '/agenda',
        template: '<agenda></agenda>'
      })
      .state('login', {
        url: '/login',
        template: '<login></login>'
      })
      .state('register', {
        url: '/cadastro',
        template: '<register-user></register-user>'
      })
      .state('resetpw', {
        url: 'resetpw',
        template: '<resetpw></resetpw>'
      })
      .state('admin',{
        url: '/admin',
        template: '<admin></admin>',
        resolve: {
          currentUser: ($q) => {
            if(!Roles.userIsInRole(Meteor.user(), ['admin'], 'banda')){
                return $q.reject('AUTH_REQUIRED');
            }else {
              return $q.resolve();
            }
          }
        }
      });


    $urlRouterProvider.otherwise("/");
  })
  .run(function ($rootScope, $state) {
    $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
      if (error === 'AUTH_REQUIRED') {
        $state.go('home');
      }
    });
  });
