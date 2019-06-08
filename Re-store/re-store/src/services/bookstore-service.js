

export default class BookstoreService {
    getBooks () {
        return [
            {
                "title": "GWT in Action",
                "price": 100,
                "isbn": "1933988231",
                "pageCount": 632,
                "publishedDate": { "$date": "2007-06-01T00:00:00.000-0700" },
                "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hanson.jpg",
                "longDescription": "The Google Web Toolkit (GWT) is a new technology from Google that automatically translates Java into JavaScript, making Ajax applications easier to code and deploy. GWT in Action is a comprehensive tutorial for Java developers interested in building the next generation of rich, web-based applications. This book was written by Robert Hanson, creator of the popular GWT Widget Library, and Adam Tacy, a major contributor to the GWT Widget Library.    The Web is experiencing a new growth with an emphasis on rich, web-based applications. These applications can be difficult to build because they rely on JavaScript, which lacks the sophisticated object-oriented structures and static typing of Java, they are tricky to debug, and they require you to manage numerous browser inconsistencies.    In May of 2006 Google released the Google Web Toolkit. GWT enables developers to create Ajax applications in Java. With GWT, you can build your applications using a real object-oriented language and take advantage of Java tools like Eclipse that are already available. Instead of trying to bring tool support to Ajax, Google brought Ajax to a place where the tools already existed.    GWT in Action shows you how to take advantage of these exciting new tools. This clearly-written book is packed with hands-on GWT examples. You   ll absorb the GWT philosophy as you build your first working GWT application.    The book begins by exploring the main features of GWT, including    Compiling Java to JavaScript, the magic that really defines GWT  Building client-side components  Convenient JUnit integration and testing  Interacting with JavaScript and existing JavaScript libraries  Internationalization  You   ll also see how GWT compares to other toolkits.    GWT in Action shows you how to set up your development environment, use and create widgets, communicate with the server, and much more. Readers will follow an example running throughout the book and quickly master the basics of GWT: widgets, panels, and event handling. The book covers the full development cycle, from setting up your development environment, to building the application, then deploying it to the web server. The entire core GWT library is discussed, with details and examples on how it can be extended.    You   ll cover:    Testing, debugging, and deploying GWT Applications  Communicating with GWT-RPC  Examining client-side RPC architecture  Alternative RPC tools: HTTPRequest, RequestBuilder, and FormPanel  Achieving interoperability in GWT with JavaScript Object Notation (JSON)  Making your GWT application flexible and supportable  GWT helps you make the most of Ajax in your web applications and GWT in Action helps you get more out of GWT.",
                "status": "PUBLISH",
                "authors": ["Robert Hanson", "Adam Tacy"],
                "categories": ["Internet", "Java"]
              },
              {
                "title": "The Quick Python Book",
                "isbn": "1884777740",
                "price": 100,
                "pageCount": 444,
                "publishedDate": { "$date": "1999-10-01T00:00:00.000-0700" },
                "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/harms.jpg",
                "longDescription": "The Quick Python Book is a clear, concise introduction to Python, one of the most elegant programming languages in existence. The book is aimed at readers who know programming but for whom the Python language is new.  This book is designed so that you can use it to quickly become proficient in Python. However, it provides more than just a beginners tutorial. Even once you've become more experienced, it should continue to be quite valuable to you as an indexed cache of information on the bulk of the Python concepts and constructs of which you will find yourself wanting to refresh or augment your knowledge.    It first covers the core features of Python (syntax, control flow, basic data structures, etc.) and provides the knowledge to write basic but useful scripts. Features in Python common to other languages are covered very concisely, while features unique to Python are explained in detail.    It next discusses Python features which would be useful to anyone using Python in larger applications, including facilities for managing large collections of code, object-oriented programming, advanced string handling, etc.    The last section of the book discusses advanced topics: Windows/COM programming with Python, integrating Python and Java (Python is one of the few languages other than Java which can be compiled into Java bytecode), extending the Python language with C, and an introduction to some of the advanced web site building tools that are available for Python.",
                "status": "PUBLISH",
                "authors": ["Daryl Harms", "Kenneth McDonald"],
                "categories": ["Python"]
              }
        ];
    }

}