export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('app', {
      url: '/',
      component: 'app'
    })
    .state('mod01', {
      url: '/mod01',
      component: 'mod01'
    })
    .state('mod02', {
      url: '/mod02',
      component: 'mod02'
    });
}
