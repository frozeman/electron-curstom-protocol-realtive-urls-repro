


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