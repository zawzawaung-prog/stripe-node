'use strict';

const testUtils = require('../../testUtils');

describe('Quotes Resource', () => {
  it('pdf', (callback) => {
    const handleRequest = (req, res) => {
      res.writeHeader(200);
      res.write('some bytes');
      res.end();
    };
    testUtils.getTestServerStripe(handleRequest, (err, stripe) => {
      stripe.quotes
        .pdf({id: 'qt_123'}, {host: 'localhost'})
        .then((res) => {
          return callback();
        })
        .catch((err) => {
          return callback(err);
        });
    });
  });
});
