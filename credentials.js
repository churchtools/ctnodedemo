// credentials.js
// stores credentials, must NOT be committed to git!

module.exports = {

  // to access churchtools via a tool, always use a dedicated tool user in ChurchTools, with limited rights!
  churchtools: {
    host: 'https://<domain and path of churchtools instance>',
    user: '<email of churchtools user>',
    password: '<password of churchtools user>'
  }

};
