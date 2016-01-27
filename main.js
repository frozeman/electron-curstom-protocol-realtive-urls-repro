'use strict';

const electron = require('electron');
const app = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.

var mainWindow = null;



// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
app.on('ready', function() {
  const protocol = require('protocol');

  // add custom protocol
  protocol.registerHttpProtocol('mist', function(request, callback) {

      // var call = {
      //     // rewrite all 
      //     url: (request.url.indexOf('http://interface') !== -1)
      //       ? 'http://localhost:4000/' + request.url.replace('http://interface/','').replace('http://interface','').replace('http:///','').replace('http://','')
      //       : request.url,
      //     method: request.method,
      //     referrer: request.referrer,
      //     session: null
      // };

      request.url = request.url.replace('mist:','http:');

      // if(request.url.indexOf('sockjs') !== -1) {

      //   if(request.url.indexOf('ws:') !== -1)
      //     request.url = request.url.replace('ws://','ws://localhost:4000');
      //   else
      //     request.url = request.url.replace('http://','http://localhost:4000');

      // }

      console.log(request.url);
      // console.log(request.url, ' -> ', call.url);

      callback(request);

  }, function (error) {
    if (error)
      console.error('Failed to register protocol', error)
  });

  // doesn't work either:
  protocol.registerStandardSchemes(['mist']);


  // Create the browser window.
  mainWindow = new BrowserWindow({width: 1200, height: 800, webPreferences: {
    nodeIntegration: false,
    // webSecurity: false
  }});

  // and load the index.html of the app.
  mainWindow.loadURL('mist://localhost:3000/'); // change to http://localhost:3000/ as reference

  // Open the DevTools.
  mainWindow.webContents.openDevTools();


});