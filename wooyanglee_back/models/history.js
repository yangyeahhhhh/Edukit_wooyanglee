const Sequelize = require('sequelize');

module.exports = class History extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      date: { // "날짜" // from Dashboard
        type: Sequelize.DATE,
        allowNull: true,
      },
      goods: { // "양품개수"  // 2호기count <<< No2Count, tagId: '16'
        type: Sequelize.STRING,
        allowNull: true,
      },
      defective: { // "불량품개수" // 불량품 총 수량 카운트 // inputP - goods
        type: Sequelize.STRING,
      },
      inputP: { // "총생산량"  // 1호기count <<< No1Count, tagId: '15'
        type: Sequelize.STRING,
        // unique : true,
        allowNull: true,
      },
      name: { // "작업자" // front - req body
        type: Sequelize.STRING(255),
        unique: false,
        allowNull: false,
      },
    }, {
      sequelize,
      modelName: 'History',
      tableName: 'History', // 'tableName', // table명을 수동으로 생성 함
      // tableName: 'tableName', // table명을 수동으로 생성 함
      // freezeTableName: true, // true: table명의 복수형 변환을 막음
      underscored: false, // true: underscored, false: camelCase
      timestamps: true, // createAt, updatedAt
      paranoid: true, // deletedAt
    });
  }

  // static associate(db) {
  // }
};
