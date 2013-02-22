'use strict';
angular.module('adt',[]).
  config(['$routeProvider', function($routeProvider) {
  $routeProvider.
      when('/default', {templateUrl: 'partials/default.html',   controller: DefaultCtrl}).
      otherwise({redirectTo: '/default'});
}]);

//angular.module('phonecat', ['phonecatFilters']);