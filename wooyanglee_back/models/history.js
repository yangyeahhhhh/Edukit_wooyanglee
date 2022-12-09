const Sequelize = require('sequelize');

module.exports = class History extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      // departmentId: {
      //   type: Sequelize.INTEGER,
      // },
      userid: {
        type: Sequelize.STRING(255),
        unique: false,
        allowNull: false,
      },
      xAxis: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      yAxis: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      input: {
        type: Sequelize.STRING,
      },
      output: {
        type: Sequelize.STRING,
      },
      defective: {
        type: Sequelize.STRING,
      },
      startedAt: {
        type: Sequelize.DATE(255),
      },
      endedAt: {
        type: Sequelize.DATE(255),
      },
      runTime: {
        type: Sequelize.INTEGER,
      },
      eStop: {
        type: Sequelize.BOOLEAN,
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
  //   // db.User.belongsTo(db.Department, { foreignKey: { name: 'departmentId', onDelete: 'SET NULL', as: 'Department' } });
  // }
};
