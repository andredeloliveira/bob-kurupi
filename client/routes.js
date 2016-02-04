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
      .state('musica-detalhes', {
        url: '/musicas/musicaId',
        template: '<musica-detalhes></musica-detalhes>',
          resolve: {
          currentUser: ($q) => {
            if (Meteor.userId() == null) {
              return $q.reject('AUTH_REQUIRED');
            }
            else {
              return $q.resolve();
            }
          }
        }
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
        template: '<admin-musicas></admin-musicas>'
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
