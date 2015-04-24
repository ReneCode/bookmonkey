
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

//	console.log(orderedTitles);


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

});
