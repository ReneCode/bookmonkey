'use strict';

describe('Service: BookDataService', function () {

    var BookDataService;

    // load the application module
    beforeEach( function() {
    	module('bmApp');
    });

    // get a reference to the service
    beforeEach(inject(function (_BookDataService_) {
        BookDataService = _BookDataService_;
    }));

    describe('Public API', function() {
        it('should include a getBookByIsbn() function', function () {
            expect(BookDataService.getBookByIsbn).toBeDefined();
        });

        it('should include a getBooks() function', function () {
            expect(BookDataService.getBooks).toBeDefined();
        });
    });

    describe('Public API usage', function() {
        describe('getBookByIsbn()', function() {
            it('should return the proper book object (valid isbn)', function() {
                var isbn = '978-3-86490-050-1',
                    book = BookDataService.getBookByIsbn(isbn);
                expect(book.title).toBe('CoffeeScript');
            });

            it('should return null (invalid isbn)', function() {
                var isbn = 'test',
                    book = BookDataService.getBookByIsbn(isbn);
                expect(book).toBeNull();
            });

            it('should include a storeBook(() function', function() {
            	expect(BookDataService.storeBook).toBeDefined();
            });

            it('should include a updateBook() function', function() {
            	expect(BookDataService.updateBook).toBeDefined();
            });

            it('should include a deleteBookByIsbn() function', function() {
            	expect(BookDataService.deleteBookByIsbn).toBeDefined(); 
            })
        });

        describe('getBooks()', function() {
            it('should return a proper array of book objects', function() {
                var books = BookDataService.getBooks();
                expect(books.length).toBe(3);
            });
        });

        describe('storeBook()', function() {
        	it ('should properly store the passed book object', function() {
        		// count before calling storeBook()
        		var beforeCount = BookDataService.getBooks().length;
        		// store new book
        		var book = storeExampleBook();
        		// one more book
        		expect(BookDataService.getBooks().length).toBe(beforeCount +1);
        		// new book found
        		expect(BookDataService.getBookByIsbn(book.isbn)).not.toBeNull();

        	});
        });

        describe('updateBook()', function() {
        	it('should properly update the book object', function() {
        		var book = storeExampleBook();
        		book.abstract = 'test';
        		// call update function
        		BookDataService.updateBook(book);
        		// get that book
        		var theBook = BookDataService.getBookByIsbn(book.isbn);
        		expect(theBook.abstract).toBe(book.abstract);
        	});
        });

        describe('deleteBookByIsbn()', function() {
        	it('should properly delete the book object with the passed isdn', function() {
        		var book = storeExampleBook();
        		BookDataService.deleteBookByIsbn(book.isbn);
        		expect(BookDataService.getBookByIsbn(book.isbn)).toBeNull();
        	});
        });
    });

	// helper functions
	var storeExampleBook = function() {
		var isbn = '978-3-86490-127-0',
				book = {
					title: 'JavaScript effektiv',
					subtitle: '68 Dinge, die ein guter JavaScript-Entwickler wissen sollte',
					isbn : isbn,
					abstract: 'Wollen Sie JavaScript wirklich beherschen?',
					numPages: 240,
					author: 'David Herman',
					publisher: {
						name: 'dpunkt.verlag',
						url: 'http://dpunkt.de/'
					}
				}

		BookDataService.storeBook(book);
		return book;
	}
});