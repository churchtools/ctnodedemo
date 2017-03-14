// churchtools.js
// defines API calls to ChurchTools
//
// (c) 2017 ChurchTools

var ctaccessor = require('../lib/ctaccessor');
var credentials = require('../credentials');

var loginQ = function () {
  return ctaccessor.postQ('login/ajax', {
    func: 'login',
    email: credentials.churchtools.user,
    password: credentials.churchtools.password
  });
};

var getResourceBookingsQ = function () {
  return ctaccessor.postQ('churchresource/ajax', {
    func: 'getBookings'
  });
};

var getAllBookingsQ = function () {
  // login
  return loginQ()
    .then(function () {
      // read the master data => Groups
      return getResourceBookingsQ();
    });
};

module.exports = {
  getAllBokingsQ: getAllBookingsQ
};