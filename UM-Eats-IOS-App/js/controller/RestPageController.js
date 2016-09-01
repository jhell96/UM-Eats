/*jslint browser: true*/
/*global console, MyApp*/

MyApp.angular.controller('RestPageController', ['$scope', '$http', 'InitService', 'DataService', 
	function ($scope, $http, InitService, DataService) {
  		'use strict';
  
    DataService.getData().then(function(result) {
    	$scope.categories = result.data.categories;
    	$scope.restaurants = result.data.restaurants;

    }, function(err){
    	console.error(err);
    });

}]);