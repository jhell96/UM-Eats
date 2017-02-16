/*jslint browser: true*/
/*global console, MyApp*/

MyApp.angular.controller('HealthyHomePageController', ['$scope', '$http', 'InitService', 'DataService', 
	function ($scope, $http, InitService, DataService) {
  		'use strict';
  
    DataService.getData().then(function(result) {
    	$scope.categories = result.data.categories;
    	$scope.restaurants = result.data.restaurants;
    	$scope.reviews = result.data.reviews;
    	$scope.onCampus = result.data.onCampus;
    	$scope.healthyHome = result.data.healthyHome;
        $scope.mealPrep = result.data.mealPrep;

    }, function(err){
    	console.error(err);
    });

}]);