'use strict';

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin('math-chem')
      .service('myService')
      .getWelcomeMessage();
  },
});
