
describe("E2E: book details view", function() {
	beforeEach(function() {
		browser.get('/');
	});

	it ('should show the correct book details', function() {
		browser.get('#/books/978-3-89864-728-1');
		expect(element(by.css('.bm-book-title')).getText()).toBe('JavaScript für Enterprise-Entwickler');
		expect(element(by.css('.bm-book-subtitle')).getText()).toBe('Professionell programmieren im Browser und auf dem Server');
		expect(element(by.css('.bm-book-isbn')).getText()).toBe('ISBN: 978-3-89864-728-1');
		expect(element(by.css('.bm-book-num-pages')).getText()).toBe('Seiten: 302');
		expect(element(by.css('.bm-book-author')).getText()).toBe('Autor: Oliver Ochs');
		expect(element(by.css('.bm-book-publisher-name')).getText()).toBe('dpunkt.verlag');
		expect(element(by.css('.bm-book-publisher-name')).getAttribute('href')).toBe('http://dpunkt.de/');
		expect(element(by.css('.bm-book-abstract')).getText()).toBe('JavaScript ist längst nicht mehr nur für klassische Webprogrammierer interessant.');
	});
});