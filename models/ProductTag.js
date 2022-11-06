// Import important parts of sequelize library.
const { Model, DataTypes } = require('sequelize');

// Import our database connection from config.js.
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class.
class ProductTag extends Model {}

// Set up fields and rules for ProductTag model.
ProductTag.init(
  {
    // Define columns.
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

// Exports the module.
module.exports = ProductTag;
