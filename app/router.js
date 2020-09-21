'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/api/users', controller.users.index);
  router.get('/api/currentUser', controller.users.current);
};
