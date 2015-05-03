// book_data.spec.js
// unit test for the BookDataService
'use scrict';






describe('Service: BookDataService', function() {
	// it's a good style to name the variable same as the service
	var BookDataService = undefined;

	// load the application module
	beforeEach( module('bmApp'));

beforeEach(inject(function($controller, $rootScope) {
    scope = $rootScope.$new();
    controller = $controller('MainCtrl', {
        $scope: scope
    });
}));

	// // get a reference to the service
	// beforeEach( angular.mock.inject(function(_BookDataService_) {
	// 	// get the BookDataService (named as _BookDataService_) and
	// 	// store it in our local var
	// 	// inject-methods knows that we mean the "BookDataService" (without _)
	// 	BookDataService = _BookDataService_;


	// }));

	

	describe('Public API', function() {
		it ('should includ a getBookByIsbn() function', function() {
			expect(BookDataService.getBookByIsbn).toBeDefined();
		});

		it ('should include a getBooks() function', function() {
			expect(BookDataService.getBooks).toBeDefined();
		});
	});

	describe('Public API usage', function() {
		describe('getBookByIsbn()', function() {
			it('should return the proper book object (valid isbn)', function() {
				var isbn = '978-3-86490-050-1',
						book = BookDataService.getBookByIsbn(isbn);
				expect(book.title).toBe('CoffeScript');
			});
		});

		describe('getBooks()', function() {
			//.. 
		});

	});

}); // describe


