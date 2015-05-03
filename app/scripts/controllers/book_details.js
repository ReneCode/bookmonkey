bmApp.controller('BookDetailsCtrl', 
			function($scope, $location, $routeParams, BookDataService) {
	var isbn = $routeParams.isbn;

	$scope.book = BookDataService.getBookByIsbn(isbn);

	$scope.goToListView = function() {
		// use location service to set the url  (windows.location)
		$location.path('/books');
	} 

});