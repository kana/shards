angular.module('App', ['ngRoute'])
.config(function ($routeProvider) {
  $routeProvider
    .when('foo', {
      controller: 'Partial',
      templateUrl: 'angularjs-route-test-partial.html',
      resolve: {
        name: function () {return 'FoO';}
      }
    })
    .when('bar', {
      controller: 'Partial',
      templateUrl: 'angularjs-route-test-partial.html',
      resolve: {
        name: function () {return 'bAr';}
      }
    });
})
.controller('App', function ($scope) {
  // TODO
})
.controller('Partial', function ($scope, name) {
  $scope.name = name;
});
// vim: expandtab softtabstop=2 shiftwidth=2 foldmethod=marker
