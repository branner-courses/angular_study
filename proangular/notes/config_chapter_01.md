## Configuration for Chapter 1

 1. There is no "node installation directory/folder" because I have installed Node using Homebrew. Within the `proangular` directory I have

        angularjs/
        node_modules/
        server.js

 1. Listing 1-4 does not work as written today (20140709). Following http://stackoverflow.com/a/24347442/621762,must install an extra package:

        npm install serve-static


   and in addition file `server.js` is rewritten as

        var connect = require('connect'),
          serveStatic = require('serve-static');
        
        var app = connect();
        
        app.use(serveStatic("angularjs"));
        app.listen(5000);

   Note that `"angularjs"` is used as the argument of `serveStatic`, rather than `"../angularjs"` as prescribed. However, this is the only file structure that I find works.

[end]
