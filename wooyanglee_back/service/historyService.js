const logger = require('../lib/logger');
const hashUtil = require('../lib/hashUtil');// ..?
const historyDao = require('../dao/historyDao');
const userDao = require('../dao/userDao');

const service = {

// ===  // user 입력
  async reg(params) {
    let inserted = null;

    // // 2. 사용자 등록 처리
    // const newParams = {
    //   ...params,
    //   password: hashPassword,
    // };

    try {
      inserted = await historyDao.insert(params);
      logger.debug(`(historyService.reg) ${JSON.stringify(inserted)}`);
    } catch (err) {
      logger.error(`(historyService.reg) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    // 결과값 리턴
    return new Promise((resolve) => {
      resolve(inserted);
    });
  },


// ===  // selectList
  async list(params) {
    let result = null;

    try {
      result = await historyDao.selectList(params);
      logger.debug(`(historyService.list) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(historyService.list) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },


// ===  // selectInfo
  async info(params) {
    let result = null;

    try {
      result = await userDao.selectInfo(params);
      logger.debug(`(userService.info) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(userService.info) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },


// ===  // update
  async edit(params) {
    let result = null;

    try {
      result = await userDao.update(params);
      logger.debug(`(userService.edit) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(userService.edit) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },


// ===  // delelte
  async delete(params) {
    let result = null;

    try {
      result = await userDao.delete(params);
      logger.debug(`(userService.delete) ${JSON.stringify(result)}`);
    } catch (err) {
      logger.error(`(userService.delete) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(result);
    });
  },


// ===  // login 프로세스
  async login(params) {
    // 1. 사용자 조회
    let user = null;
    try {
      user = await userDao.selectUser(params);
      logger.debug(`(userService.login) ${JSON.stringify(user)}`);

      // 해당 사용자가 없는 경우 튕겨냄
      if (!user) {
        const err = new Error('Incorect userid or password');
        logger.error(err.toString());

        return new Promise((resolve, reject) => {
          reject(err);
        });
      }
    } catch (err) {
      logger.error(`(userService.login) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }
    // 2. 비밀번호 비교
    try {
      const checkPassword = await hashUtil.checkPasswordHash(params.password, user.password);
      logger.debug(`(userService.checkPassword) ${checkPassword}`);

      // 비밀번호 틀린 경우 튕겨냄
      if (!checkPassword) {
        const err = new Error('Incorect userid or password');
        logger.error(err.toString());

        return new Promise((resolve, reject) => {
          reject(err);
        });
      }
    } catch (err) {
      logger.error(`(userService.checkPassword) ${err.toString()}`);
      return new Promise((resolve, reject) => {
        reject(err);
      });
    }

    return new Promise((resolve) => {
      resolve(user);
    });
  },
};

module.exports = service;
