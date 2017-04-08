import { module } from 'angular';

function routeConfig($urlRouterProvider, $stateProvider, $locationProvider) {
  'ngInject';

  $stateProvider

  // .state('all', {
  //   url: '/all',
  //   component: 'allstimeline'
  // });

  $urlRouterProvider.otherwise('/');

}

export default module('app.routes', ['ui.router'])
  .config(routeConfig);
