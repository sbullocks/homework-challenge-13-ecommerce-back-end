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
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id',
        unique: false
      }
    },
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
