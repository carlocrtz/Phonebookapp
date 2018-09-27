angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('phoneNumbers', {
    url: '/page1',
    templateUrl: 'templates/phoneNumbers.html',
    controller: 'phoneNumbersCtrl'
  })

  .state('aldrinBondoc', {
    url: '/page2',
    templateUrl: 'templates/aldrinBondoc.html',
    controller: 'aldrinBondocCtrl'
  })

  .state('shePeA', {
    url: '/page3',
    templateUrl: 'templates/shePeA.html',
    controller: 'shePeACtrl'
  })

  .state('sarahAbdeen', {
    url: '/page4',
    templateUrl: 'templates/sarahAbdeen.html',
    controller: 'sarahAbdeenCtrl'
  })

  .state('seanSirMelchourCariOLimpin', {
    url: '/page5',
    templateUrl: 'templates/seanSirMelchourCariOLimpin.html',
    controller: 'seanSirMelchourCariOLimpinCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});