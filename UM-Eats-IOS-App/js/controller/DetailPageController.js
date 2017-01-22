/*jslint browser: true*/
/*global console, MyApp*/

MyApp.angular.controller('DetailPageController', ['$scope', '$http', 'InitService', 'DataService', 
	function ($scope, $http, InitService, DataService) {
  		'use strict';
  
    $scope.onSugClicked = function (restKey) {
      console.log(restKey);
      DataService.sugClicked(restKey);
    } 

  	DataService.addEventListener('categoryClicked', function(category) {
  		console.log("DetailPageController:");
  		console.log(category);
  		$scope.category = category;
  	});

    DataService.getData().then(function(result) {
    	$scope.categories = result.data.categories;
    	$scope.restaurants = result.data.restaurants;

    }, function(err){
    	console.error(err);
    });

}]);