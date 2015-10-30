angular.module('SoccerTableApp', [
  'SoccerTableApp.controllers',
  'SoccerTableApp.services',
  'ngRoute'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.
      when("/teams", { templateUrl: "views/teams.html", controller: "tableController" }).
      when("/teams/:id", { templateUrl: "views/team.html", controller: "teamDetailController" }).
      otherwise({ redirectTo: '/teams' });
}]);