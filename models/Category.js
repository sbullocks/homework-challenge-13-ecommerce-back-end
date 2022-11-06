// Import important parts of sequelize library.
const { Model, DataTypes } = require('sequelize');

// Import our database connection from config.js.
const sequelize = require('../config/connection.js');

// Initialize Product model (table) by extending off Sequelize's Model class.
class Category extends Model {}

// Set up fields and rules for Category model.
Category.init(
  {
    // Define columns.
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);
// Exports the module.
module.exports = Category;
