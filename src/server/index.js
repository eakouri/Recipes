
// initializes various high-level components, i.e. web server, configuration, database, logger, etc

import WebServer from './web.server.js'

let webServer = new WebServer();
webServer.start()
    .then(() => {
        console.log('Web server started!')
    })
    .catch(err => {
        console.error(err)
        console.error('Failed to start web server')
    });
