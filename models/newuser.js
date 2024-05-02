'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class newuser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  newuser.init({
    email: DataTypes.STRING,
    age: DataTypes.INTEGER,
    fullName: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'newuser',
  });
  return newuser;
};