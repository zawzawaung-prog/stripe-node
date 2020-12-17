'use strict';

const testUtils = require('../../testUtils');
const fs = require('fs');
const expect = require('chai').expect;

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

  it('pdf, an error', (callback) => {
    const handleRequest = (req, res) => {
      setTimeout(() => res.writeHead(500));
      setTimeout(
        () =>
          res.write(
            '{"error": "api_error", "error_description": "this is bad"}'
          ),
        10
      );
      setTimeout(() => res.end(), 20);
    };

    testUtils.getTestServerStripe(handleRequest, (err, stripe) => {
      if (err) {
        return callback(err);
      }

      return stripe.quotes.pdf(
        {id: 'qt_123'},
        {host: 'localhost'},
        (err, res) => {
          expect(err).to.exist;
          console.log(err);
          expect(err.raw.type).to.equal('api_error');
          expect(err.raw.message).to.equal('this is bad');
          return callback();
        }
      );
    });
  });
});
