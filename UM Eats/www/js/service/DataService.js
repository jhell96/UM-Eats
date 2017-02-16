/*jslint browser: true*/
/*global console, Framework7, MyApp, $document*/

MyApp.angular.factory('DataService', ['$document', '$http', function ($document, $http) {
  'use strict';

  var pub = {},
    eventListeners = {
      'categoryClicked' : [],
      'sugClicked' : []
    };

  pub.addEventListener = function (eventName, callback) {
    eventListeners[eventName].push(callback);
  };

  pub.categoryClicked = function (category) {
    for (var i = 0; i < eventListeners.categoryClicked.length; i++){
      eventListeners.categoryClicked[i](category);
    }
  }

  pub.sugClicked = function (restKey) {
    for (var i = 0; i < eventListeners.sugClicked.length; i++){
      eventListeners.sugClicked[i](restKey);
    }
  }

  pub.getData = function () {
    return $http.get('js/service/data.json');
  };

  return pub;
  
}]);