// demo.js
// Node.js demo to access resource bookings in ChurchTools
//
// (c) 2017 ChurchTools

var ct = require('./controller/churchtools');
var logger = require('./lib/logger').getLogger({ module: 'demo' });

function getAndPrintAllBookings() {
  ct.getAllBokingsQ()
    .then(function (bookings) {
      console.dir(bookings);
    })
    .fail(function (err) {
      logger.error('06E775F1-4BFD-43F1-ABBD-C5836CA71D1F', 'failed to get bookings.', {err: err});
    })

}

getAndPrintAllBookings();

