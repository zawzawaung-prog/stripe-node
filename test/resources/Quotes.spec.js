'use strict';

const testUtils = require('../../testUtils');
const fs = require('fs');

describe('Quotes Resource', () => {
  it('pdf', (callback) => {
    const handleRequest = (req, res) => {
      setTimeout(() => res.write('pretend'), 10);
      setTimeout(() => res.write(' this'), 100);
      setTimeout(() => res.write(' is a pdf'), 1000);
      setTimeout(() => res.end(), 1200);
    };

    testUtils.getTestServerStripe(handleRequest, (err, stripe) => {
      if (err) {
        return callback(err);
      }

      return stripe.quotes.pdf(
        {id: 'qt_123'},
        {host: 'localhost'},
        (err, res) => {
          if (err) {
            return callback(err);
          }
          res.pipe(fs.createWriteStream('/tmp/myquotespdf'));
          res.on('end', () => {
            return callback();
          });
        }
      );
    });
  });
});
