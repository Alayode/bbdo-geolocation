

/*
Chris Samuel
ksamuel.chris@gmail.com
September 24, 2015

Changing layouts with Routes and $location

Though AJAX apps are technically single-page apps (in the sense that they only load an HTML page on
the first request, and then just update areas within the DOM thereafter), we usually have multiple
sub page vies that we show or hide from the user, as appropriate.

*/

//
// We can use angular's $route service to magnage this scenario for us. Routes let you specify that,

// for  a given URL that the browser points to, Angular should load and display a Template, and instantiate

// a controller to provide context for the template.
//
angular.module('BBDO', ['ngRoute'])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider
      .when('/', {
        templateUrl: 'layouts/home.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
