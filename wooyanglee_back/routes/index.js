const express = require('express');
const logger = require('../lib/logger');
const authRouter = require('./auth');
// const departmentRouter = require('./department');
const userRouter = require('./user');
const historyRouter = require('./history');
// const deviceRouter = require('./device');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

// logTest
router.get('/log-test', (req, res, next) => {
  logger.error('This message is error');
  logger.warn('This message is warn');
  logger.info('This message is info');
  logger.verbose('This message is verbose');
  logger.debug('This message is debug');
  logger.silly('This message is silly');

  res.send('log test');
});

router.use('/auths', authRouter);
router.use('/users', userRouter);
router.use('/history', historyRouter);
// router.use('/devices', deviceRouter);

module.exports = router;
