const { sequelize } = require('./connection');
const User = require('./user');
const Department = require('./department');
const Dashboard = require('./dashboard');
const History = require('./history');

const db = {};

db.sequelize = sequelize;

// model 생성
db.User = User;
db.Department = Department;
db.Dashboard = Dashboard;
db.History = History;

// model init
User.init(sequelize);
Department.init(sequelize);
Dashboard.init(sequelize);
History.init(sequelize);

// association(관계 생성) 이해를 위해 하나씩 관계설정함 아래는 한번에 설정
// Object.keys(db).forEach(modelName => {
//     if (db[modelName].associate) {
//       db[modelName].associate(db);
//     }
//   });

// association(관계 생성)
// Department.associate(db);
// User.associate(db);

module.exports = db;
