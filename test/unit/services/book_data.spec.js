// book_data.spec.js
// unit test for the BookDataService

describe('Service: BookDataService', function() {
	// it's a good style to name the variable same as the service
	var BookDataService;

	// load the application module
	beforeEach(module('bmApp'));

	// get a reference to the service
	beforeEach(inject(function(_BookDataService_) {
		// get the BookDataService (named as _BookDataService_) and
		// store it in our local var
		// inject-methods knows that we mean the "BookDataService" (without _)
		BookDataService = _BookDataService_;
	}));

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
			// ..
		});

		describe('getBooks()', function() {
			//.. 
		});

	});

}); // describe


