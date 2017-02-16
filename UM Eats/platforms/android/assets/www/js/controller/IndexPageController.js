/*jslint browser: true*/
/*global console, MyApp*/

MyApp.angular.controller('IndexPageController', ['$scope', '$http', 'InitService', 'DataService', 
	function ($scope, $http, InitService, DataService) {
  		'use strict';
  
  	$scope.onItemClicked = function (category) {
  		DataService.categoryClicked(category);
  	}  


  InitService.addEventListener('ready', function () {
    // DOM ready
    console.log('IndexPageController: ok, DOM ready');
    
    // You can access angular like this:
    // MyApp.angular
    
    // And you can access Framework7 like this:
    // MyApp.fw7.app

    DataService.getData().then(function(result) {
    	$scope.categories = result.data.categories;
    	$scope.restaurants = result.data.restaurants;

    }, function(err){
    	console.error(err);
    });

  });
  
}]);