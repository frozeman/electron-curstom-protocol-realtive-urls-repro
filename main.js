'use strict';

const electron = require('electron');
const app = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.

var mainWindow = null;



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  const protocol = require('protocol');
  const fs = require('fs');

  // add custom protocol
  protocol.interceptHttpProtocol('http', function(request, callback) {

      var call = {
          // rewrite all 
          url: (request.url.indexOf('http://interface') !== -1)
            ? 'http://localhost:3000/' + request.url.replace('http://interface/','').replace('http://interface','').replace('http:///','').replace('http://','')
            : request.url,
          method: request.method,
          referrer: request.referrer,
          session: null
      };

      console.log(request.url, ' -> ', call.url);

      callback(call);

  }, function (error) {
    if (error)
      console.error('Failed to register protocol', error)
  });

 // protocol.registerStandardSchemes(['myprot']);


  // BUFFER protocol works!
  // protocol.registerBufferProtocol('myprot', function(request, callback) {

  //     console.log('Loading '+ '/Users/frozeman/Sites/_ethereum/meteor-dapp-wallet/build' + request.url.replace('myprot://interface',''));

  //     fs.readFile('/Users/frozeman/Sites/_ethereum/meteor-dapp-wallet/build' + request.url.replace('myprot://interface',''), function (err, data) {
  //         if (err) throw err;

  //         var type = 'text/html';

  //         type = (request.url.indexOf('.css') !== -1) ? 'text/css' : type;
  //         type = (request.url.indexOf('.js') !== -1) ? 'text/javascript' : type;
    
  //         callback({
  //           mimeType: type,
  //           data: data
  //         });
  //     });

  // }, function (error) {
  //   if (error)
  //     console.error('Failed to register protocol')
  // });



  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1200, height: 800});
  // webPreferences: {
  //   nodeIntegration: false,
  //   webSecurity: false,
  //   allowRunningInsecureContent: true
  // }

  // and load the index.html of the app.
  mainWindow.loadURL('http://interface/?65432');

  // Open the DevTools.
  mainWindow.webContents.openDevTools();


});