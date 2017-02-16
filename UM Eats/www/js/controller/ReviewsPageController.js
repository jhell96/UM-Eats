/*jslint browser: true*/
/*global console, MyApp*/

MyApp.angular.controller('ReviewsPageController', ['$scope', '$http', 'InitService', 'DataService', 
	function ($scope, $http, InitService, DataService) {
  		'use strict';
  
    DataService.getData().then(function(result) {
    	$scope.categories = result.data.categories;
    	$scope.restaurants = result.data.restaurants;
    	$scope.reviews = result.data.reviews;

    }, function(err){
    	console.error(err);
    });

}]);