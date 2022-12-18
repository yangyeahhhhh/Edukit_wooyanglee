const { Op } = require('sequelize');
const { User } = require('../models/index');
const { Dashboard, History } = require('../models/index');

const dao = {
  // 히스토리 데이터 등록
  insert(params) {
    return new Promise((resolve, reject) => {
      History.create(params).then((inserted) => {
        // password는 제외하고 리턴함
        const insertedResult = { ...inserted };
        // delete insertedResult.dataValues.password;
        resolve(insertedResult);
      }).catch((err) => {
        reject(err);
      });
    });
  },
  // 리스트 조회
  selectList(params) {
    // where 검색 조건을 setQuery에 담음
    let startDate2 = new Date(params.startDate)
    let endDate2 = new Date(params.endDate)
    console.log("뉴데이타 확인", startDate2)
    const setQuery = {};
    if(params.startDate && params.endDate){
         
      if (startDate2 >= endDate2) {
        setQuery.where = { 
          ...setQuery.where,
          date: { [Op.and]: [
            { [Op.gte]: endDate2 },
            { [Op.lte]: startDate2}
          ] }
        }
      }
      else{
        setQuery.where = { 
          ...setQuery.where,
          date: { [Op.and]: [
            { [Op.gte]: startDate2},
            { [Op.lte]: endDate2}
          ] }, 
        }
      }

        // order by 정렬 조건
      setQuery.order = [['date', 'DESC']];
      console.log('다', setQuery)
      
      return new Promise((resolve, reject) => {
        History.findAndCountAll({
          ...setQuery,
        }).then((selectedList) => {
          resolve(selectedList);
        }).catch((err) => {
          reject(err);
        });
      });
      
    }else{ 
      // order by 정렬 조건
      setQuery.order = [['date', 'DESC']];
      console.log('데이터가 없을 때', setQuery)
      
      return new Promise((resolve, reject) => {
        History.findAndCountAll({
           ...setQuery,
        }).then((selectedList) => {
          resolve(selectedList);
        }).catch((err) => {
          reject(err);
        });
      });
      
    }
      
    
    
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
