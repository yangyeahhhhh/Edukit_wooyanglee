const { Op } = require('sequelize');
const { User } = require('../models/index');
const { Dashboard, History } = require('../models/index');

const dao = {
  // 등록
  insert(params) {
    return new Promise((resolve, reject) => {
      History.create(params).then((inserted) => {
        // password는 제외하고 리턴함
        const insertedResult = { ...inserted };
        delete insertedResult.dataValues.password;
        resolve(inserted);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 리스트 조회
  selectList(params) {
    // where 검색 조건을 setQuery에 담음
    // setQuery : JS
    const setQuery = {};
    if (params.startDate) {
      setQuery.where = { // setQuery = { where : }
        ...setQuery.where,
        // date: { [Op.like]: `%${params.startDate}%` }, // like검색
        date: { [Op.gte]: `%${params.startDate}%` }, // like검색
      };
      console.log('가', setQuery)
    }
    // if (params.endDate) {
    //   setQuery.where = {
    //     ...setQuery.where,
    //     date: { [Op.like]: `%${params.endDate}%` }, // '='검색
    //   };
    //   console.log('나', setQuery)
    // }
    
    // order by 정렬 조건
    setQuery.order = [['id', 'DESC']];
    console.log('다', setQuery)
    
    return new Promise((resolve, reject) => {
      History.findAndCountAll({
        ...setQuery,
        // attributes: { exclude: ['password'] }, // password 필드 제외
        // include: [
        //   {
        //     model: Department,
        //     as: 'Department',
        //   },
        // ],
      }).then((selectedList) => {
        resolve(selectedList);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 상세정보 조회
  selectInfo(params) {
    return new Promise((resolve, reject) => {
      User.findByPk(
        params.id,
        {
          attributes: { exclude: ['password'] }, // password 필드 제외
        },
      ).then((selectedInfo) => {
        resolve(selectedInfo);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 수정
  update(params) {
    return new Promise((resolve, reject) => {
      User.update(
        params,
        {
          where: { id: params.id },
        },
      ).then(([updated]) => {
        resolve({ updatedCount: updated });
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 삭제
  delete(params) {
    return new Promise((resolve, reject) => {
      User.destroy({
        where: { id: params.id },
      }).then((deleted) => {
        resolve({ deletedCount: deleted });
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 로그인을 위한 사용자 조회
  selectUser(params) {
    return new Promise((resolve, reject) => {
      User.findOne({
        attributes: ['id', 'userid', 'password', 'name', 'role'],
        where: { userid: params.userid },
      }).then((selectedOne) => {
        resolve(selectedOne);
      }).catch((err) => {
        reject(err);
      });
    });
  },
};

module.exports = dao;
