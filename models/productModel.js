module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define(
      "product",
      {
        product_id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
          allowNull: false,
          unique: true
        },
        product_name: {
          type: DataTypes.STRING(100),
          allowNull: false,
        },
        product_picture: {
          type: DataTypes.STRING(200),
          allowNull: false,
        },
        user_create: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        date_create: {
          type: DataTypes.DATE,
          defaultValue: DataTypes.NOW
        },
        user_update: {
          type: DataTypes.STRING(50),
          allowNull: true
        },
        date_update: {
          type: DataTypes.DATE,
          allowNull: true
        }
      },
      {
        tableName: "product",
        timestamps: false,
        createdAt: false,
        updatedAt: false,
      }
    );
  
    return Product;
  };
  