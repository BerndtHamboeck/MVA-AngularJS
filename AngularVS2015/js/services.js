angular.module('SoccerTableApp.services', []).
  factory('teamDataService', function ($http) {

      var soccerData = {};

      soccerData.getData = function () {
          return $http.get('/data/dataAT.json');
      }

      soccerData.getTeamInfo = function (id) {
          //return $http.get('/data/dataAT' + id + '.json');
          return $http.get('/data/dataAT.json');
      }

      return soccerData;
  });