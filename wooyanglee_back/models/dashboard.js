const Sequelize = require('sequelize');

module.exports = class Dashboard extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      dataTime: {  // DateTime //tagId: '0'
        type: Sequelize.DATE,
        // unique : true,
      },
      inputP: {  // 포장재(Package) 투입량<<< no1생산량 No1Count //tagId: '15'
        type: Sequelize.STRING,
        // unique : true,
        allowNull: true,
      },
      inputC: {  // 원자재(Contents) 투입량 <<< no2생산량 No2Count //tagId: '16'
        type: Sequelize.STRING,
        allowNull: true,
      },
      goods: {  // 양품총수량카운트 No3Count //tagId: '17'
        type: Sequelize.STRING,
        allowNull: true,
      },
      defective: { // 불량품 총 수량 카운트 // inputP - goods
        type: Sequelize.STRING,
      },
      outputLimit: {  // 생산량리미트 //tagId: '36'
        type: Sequelize.STRING,
        allowNull: true,
      },
      repeatTime: {  // 공정반복시간 No1Delay/sec //tagId: '14'
        type: Sequelize.STRING,
        allowNull: true,
      },
      eStop: {  // 비상정지이면 false //tagId: 35
        type: Sequelize.BOOLEAN,
        // unique : true,
        allowNull: true,        
      },
      // yAxis: {
      //   type: Sequelize.STRING,
      //   allowNull: true,
      // },
      // input: {
      //   type: Sequelize.STRING,
      // },
      // output: {
      //   type: Sequelize.STRING,
      // },      
      // startedAt: {
      //   type: Sequelize.DATE(255),
      // },
      // endedAt: {
      //   type: Sequelize.DATE(255),
      // },
      // runTime: {
      //   type: Sequelize.INTEGER,
      // },
    }, {
      sequelize,
      modelName: 'Dashboard',
      tableName: 'Dashboard', //'tableName', // table명을 수동으로 생성 함
      // tableName: 'tableName', // table명을 수동으로 생성 함
      // freezeTableName: true, // true: table명의 복수형 변환을 막음
      underscored: false, // true: underscored, false: camelCase
      timestamps: true, // createAt, updatedAt
      paranoid: true, // deletedAt
    });
  }

  // static associate(db) {
  //   // db.User.belongsTo(db.Department, { foreignKey: { name: 'departmentId', onDelete: 'SET NULL', as: 'Department' } });
  // }
};
