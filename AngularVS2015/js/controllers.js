angular.module('SoccerTableApp.controllers', [])
  .controller('tableController', function ($scope, teamDataService) {
      $scope.teamList = [];

      $scope.searchFilter = function (team) {
          var keyword = new RegExp($scope.teamFilter, 'i');
          return !$scope.teamFilter || keyword.test(team.Klub);
      };

      teamDataService.getData()
          .success(function (data) {
               $scope.teamList = data;
          })
          .error(function (data, status) {
              console.error('*Error reading data: ' + data);
          })

      ;
  })

  .controller('teamDetailController', function ($scope, $routeParams, teamDataService) {
    $scope.teamID = $routeParams.id;
    $scope.teamInfo = {};

    teamDataService.getData()
        .success(function (data) {
            $scope.teamInfo = data[$routeParams.id - 1];
        })
        .error(function (data, status) {
            console.error('*Error reading data: ' + data);
        });
  })