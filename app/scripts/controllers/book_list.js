bmApp.controller('BookListCtrl', function($scope, $filter, BookDataService) {

    // sorting the book-list
    $scope.getBookOrder = function(book) {
        return book.title;
    }

    $scope.books = BookDataService.getBooks();

});