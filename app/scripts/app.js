"use strict";

var bmApp = angular.module('bmApp', ['ngRoute']);

bmApp.config(function($routeProvider) {
//	console.log('config');
	$routeProvider.when('/books/:isbn', {
		templateUrl:'templates/book_details.html',
		controller:'BookDetailsCtrl'
	})
	.when('/books', {
		templateUrl:'templates/book_list.html',
		controller:'BookListCtrl'
	})
	.otherwise( {
		redirectTo: '/books'
	});	
});

bmApp.factory('restService', function ($http) {
    return {
      auth: function (login,password) {
        return (login=='login' && pass=='password');
      },
      get: function () {
        return $http.get('/user');
      }
    }
  });