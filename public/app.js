var app = angular.module('test',['ui.router']);


app.config(['$stateProvider','$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/temp');
    $stateProvider
    .state('temp',{
      url:'/temp',
      templateUrl: 'temp.html'
    })
      .state('temp1', {
        url: '/temp1',
        templateUrl: 'template1.html'
      })
      .state('temp2', {
        url: '/temp2',
        templateUrl: 'template2.html',
      });
  }]);

  
