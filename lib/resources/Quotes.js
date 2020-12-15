'use strict';

const {multipartRequestDataProcessor} = require('../multipart');
const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'quotes',

  pdf: stripeMethod({
    method: 'GET',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    host: 'files.stripe.com',
    binary: true,
  }),
});
