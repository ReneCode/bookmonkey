bmApp.service('BookDataService', function() {
	var srv = {};

	srv._books = [
        {
            title       : 'JavaScript für Enterprise-Entwickler',
            subtitle    : 'Professionell programmieren im Browser und auf dem Server',
            isbn        : '978-3-89864-728-1',
            abstract    : 'JavaScript ist längst nicht mehr nur für klassische Webprogrammierer interessant.',
            numPages    : 302,
            author      : 'Oliver Ochs',
            publisher   : {
                name: 'dpunkt.verlag',
                url : 'http://dpunkt.de'
            }
        },
        {
            title       : 'Node.js & Co.',
            subtitle    : 'Skalierbare, hochperformante und echtzeitfähige Webanwendungen professionell in JavaScript entwickeln',
            isbn        : '978-3-89864-829-5',
            abstract    : 'Nach dem Webbrowser erobert JavaScript nun auch den Webserver.',
            numPages    : 334,
            author      : 'Golo Roden',
            publisher   : {
                name: 'dpunkt.verlag',
                url : 'http://dpunkt.de'
            }
        },
        {
            title       : 'CoffeeScript',
            subtitle    : 'Einfach JavaScript',
            isbn        : '978-3-86490-050-1',
            abstract    : 'CoffeeScript ist eine junge, kleine Programmiersprache, die nach JavaScript übersetzt wird.',
            numPages    : 200,
            author      : 'Andreas Schubert',
            publisher   : {
                name: 'dpunkt.verlag',
                url : 'http://dpunkt.de'
            }
        }
    ];
  // service implementation
  srv.getBookByIsbn = function(isbn) {
  	for (var i=0, n=srv._books.length; i<n; i++) {
  		if (isbn === srv._books[i].isbn) {
  			// found - return a copy (so orginal data can't be modified)
  			return angular.copy(srv._books[i]);
  		}
  	}
  	// sadly not found
  	return null;
  }

  srv.getBooks = function() {
  	// copy hole data
  	return angular.copy(srv._books);
  }

	// public API
	return {
		getBookByIsbn: function(isbn) {
			return srv.getBookByIsbn(isbn);
		},

		getBooks: function() {
			return srv.getBooks();
		}
	};
});

