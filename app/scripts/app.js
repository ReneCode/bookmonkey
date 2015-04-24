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

