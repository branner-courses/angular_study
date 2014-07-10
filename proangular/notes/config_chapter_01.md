## Configuration for Chapter 1

 1. Code for the Freeman book is at http://www.apress.com/9781430264484, under the "Source Code/Downloads" tab. I did not see this at first and downloaded the prescribed versions of `angular.js` and `bootstrap.css` etc. from their own sites.

 1. I am on Mac OS 10.9.4 and reinstalled Node freshly using Homebrew. Current versions of code:

        $ npm version
        { http_parser: '1.0',
          node: '0.10.29',
          v8: '3.14.5.9',
          ares: '1.9.0-DEV',
          uv: '0.10.27',
          zlib: '1.2.3',
          modules: '11',
          openssl: '1.0.1h',
          npm: '1.5.0-alpha-1' }
        $ npm list
        .../angular_study/proangular
        ├─┬ connect@3.0.1
        │ ├─┬ debug@1.0.2
        │ │ └── ms@0.6.2
        │ ├─┬ finalhandler@0.0.2
        │ │ └── escape-html@1.0.1
        │ ├── parseurl@1.0.1
        │ └── utils-merge@1.0.0
        └─┬ serve-static@1.3.1
          ├── escape-html@1.0.1
          ├── parseurl@1.1.3
          └─┬ send@0.5.0
            ├── debug@1.0.2
            ├─┬ finished@1.2.2
            │ └── ee-first@1.0.3
            ├── fresh@0.2.2
            ├── mime@1.2.11
            ├── ms@0.6.2
            └── range-parser@1.0.0

 1. There is no "node installation directory/folder" because I have installed Node using Homebrew. Within the `proangular` directory I have

        angularjs/    # contains various .css files
        node_modules/ # created through the local installation of Node packages. 
        server.js     # does not work within a subdirectory (tried /code)

 1. The book's Listing 1-4 does not work as written today (20140709). Following http://stackoverflow.com/a/24347442/621762, one must install an extra package:

        npm install serve-static

   and in addition file `server.js` is rewritten as

        var connect = require('connect'),
          serveStatic = require('serve-static');
        
        var app = connect();
        
        app.use(serveStatic("angularjs"));
        app.listen(5000);

   Note that `"angularjs"` is used as the argument of `serveStatic`, rather than `"../angularjs"` as prescribed on Stack. However, this is the only file structure that I find works.

[end]
