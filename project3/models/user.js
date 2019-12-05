module.exports = (sequelize, type) => sequelize.define('user', {
  user_id: {
    type: type.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: type.STRING,
    allowNull: false,
  },
  first_name: type.STRING,
  last_name: type.STRING,
  email: {
    type: type.STRING,
    allowNull: false,
  },
  password: {
    type: type.STRING,
    allowNull: false,
  },
  resetPasswordToken: type.STRING,
  resetPasswordExpires: type.DATE,
});
