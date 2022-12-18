const express = require('express');

const router = express.Router();
const logger = require('../lib/logger');
const userService = require('../service/userService');
const historyService = require('../service/historyService');

// 등록 : history페이지 접속시 생성?
//      vs 대쉬보드에서 확인 누르면 그때 생성?
router.post('/', async (req, res) => {
  try {
    const params = {
      date: req.body.date,
      goods: req.body.goods,
      defective: req.body.defective,
      inputP: req.body.inputP,
      name: req.body.name,
    };
    logger.info(`(history.reg.params) ${JSON.stringify(params)}`);

    // // 입력값 null 체크
    // if (!params.name || !params.userid || !params.password) {
    //   const err = new Error('Not allowed null (name, userid, password)');
    //   logger.error(err.toString());

    //   res.status(500).json({ err: err.toString() });
    // }

    // 비즈니스 로직 호출
    const result = await historyService.reg(params);
    logger.info(`(history.reg.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});


// 모두조회
router.get('/', async (req, res) => {
  try {    
    // params에 조회 날짜가 있으면 들어감
    const params = {
      startDate: req.query.startDate,
      endDate: req.query.endDate,
    };
    logger.info(`(history.list.params) ${JSON.stringify(params)}`);

    // DB에서 찾아서 result에 넣음
    const result = await historyService.list(params);
    logger.info(`(history.list.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});

// inform 창 (필요없음)
router.get('/:id', async (req, res) => {
  try {
    const params = {
      id: req.params.id,
    };
    logger.info(`(user.info.params) ${JSON.stringify(params)}`);

    const result = await userService.info(params);
    logger.info(`(user.info.result) ${JSON.stringify(result)}`);

    // 최종 응답
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ err: err.toString() });
  }
});



module.exports = router;
