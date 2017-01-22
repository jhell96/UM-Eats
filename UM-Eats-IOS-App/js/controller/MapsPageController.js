/*jslint browser: true*/
/*global console, MyApp*/
MyApp.angular.controller('MapsPageController', ['$scope', '$http', 'InitService', 'DataService', 'NgMap', 
    function ($scope, $http, InitService, DataService, NgMap) {

    NgMap.getMap('map').then(function(map) {
      console.log("map: ", map);
      $scope.map = map 
    });

    DataService.getData().then(function(result) {
      $scope.categories = result.data.categories;
      $scope.restaurants = result.data.restaurants;
      
    }, function(err){
     console.error(err);
    });
}]);