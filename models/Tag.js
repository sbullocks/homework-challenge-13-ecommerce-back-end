// Import important parts of sequelize library.
const { Model, DataTypes } = require('sequelize');

// Import our database connection from config.js.
const sequelize = require('../config/connection.js');

// Initialize Product model (table) by extending off Sequelize's Model class.
class Tag extends Model {}

// Set up fields and rules for Tag model.
Tag.init(
  {
    // Define columns.
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'tag',
  }
);

// Exports the module.
module.exports = Tag;
