'use strict';

const StripeResource = require('../StripeResource');
const stripeMethod = StripeResource.method;

module.exports = StripeResource.extend({
  path: 'quotes',

  pdf: stripeMethod({
    method: 'GET',
    host: 'files.stripe.com',
    binary: true,
  }),
});
