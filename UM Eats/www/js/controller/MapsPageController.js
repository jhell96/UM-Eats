/*jslint browser: true*/
/*global console, MyApp*/
MyApp.angular.controller('MapsPageController', ['$scope', '$http', 'InitService', 'DataService', 'NgMap', 
    function ($scope, $http, InitService, DataService, NgMap) {

    var vm = this;

    vm.initMap = function(mapId) {
      vm.map = NgMap.initMap(mapId);
    }

    DataService.getData().then(function(result) {
      $scope.categories = result.data.categories;
      $scope.restaurants = result.data.restaurants;
      
    }, function(err){
     console.error(err);
    });
}]);