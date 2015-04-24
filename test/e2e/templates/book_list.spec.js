
describe("E2E: book list view", function() {
	var expectedBooks = [
		{ 
		title:'CoffeeScript',
		isbn: '978-3-86490-050-1',
		author: 'Andreas Schubert'
		},
		{
			title:'JavaScript für Enterprise-Entwickler',
			isbn:'978-3-89864-728-1',
			author: 'Oliver Ochs'
		},
		{
			title: 'Node.js & Co.',
			isbn: '978-3-89864-829-5',
			author: 'Golo Roden'
		}
	];	

	var orderedTitles = expectedBooks.map(function(book) {
		return book.title;
	});


	beforeEach(function() {
		browser.get('#/books');
		browser.refresh();
	});

	var selector = 'table.bm-book-list tr';
	
	// ----------------------------------------
	it ('should show the correct number of books', function() {
		expect(element.all(by.css(selector)).count()).toEqual(expectedBooks.length);
	});

	// ----------------------------------------
	it ('should show the books in the proper order', function() {

		expect( element.all(by.repeater('book in books')
				.column('book.title'))
				.getText()).toEqual(orderedTitles);
	});

	// ----------------------------------------
	it ('should show the correct book information', function() {
		// do the orther book detials match?
		for (var i=0, n=expectedBooks.length; i<n; i++) {
			var row = element.all(by.repeater('book in books').row(i));
			expect(row.getText()).toEqual(
					[	
						expectedBooks[i].title + ' ' +
						expectedBooks[i].author + ' ' +
						expectedBooks[i].isbn
					]
				);

		};
	});

	// ----------------------------------------
	it('should allow filtering by book title', function() {
		// get the string "Coffee"
		var searchText = orderedTitles[0].substr(0,6);
		element(by.model('searchText')).sendKeys(searchText);
		expect( element.all(by.repeater('book in books')
				.column('book.title'))
					.getText()).toEqual( [ orderedTitles[0] ]);
	});

	// ----------------------------------------
	it('should allow filtering by author', function() {
		// get the string "Andreas"
		var searchText = expectedBooks[0].author.substr(0,7);
		element(by.model('searchText')).sendKeys(searchText);
		expect( element.all(by.repeater('book in books')
				.column('book.title'))
					.getText()).toEqual( [ expectedBooks[0].title ]);
	});

	// ----------------------------------------
	it('should allow filtering by isbn', function() {
		// get the string "050-1"
		var searchText = expectedBooks[0].isbn.substr(-5,5);
		element(by.model('searchText')).sendKeys(searchText);
		expect( element.all(by.repeater('book in books')
				.column('book.title'))
					.getText()).toEqual( [ expectedBooks[0].title ]);
	});


	it ('should appropriately navigate to details view', function() {
		var i = 0,
				detailsLink = selector + ':nth-child(' + (i+1) + ') a';
		$(detailsLink).click();

		expect(
			browser.getCurrentUrl()
		).toEqual('http://localhost:8000/#/books/' + expectedBooks[i].isbn);
	});



});
