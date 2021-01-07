const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Musicalgenre extends Model {
    static associate(models) {
      Musicalgenre.belongsToMany(models.Dj, {
        through: "DjMusicalGenres",
        foreignKey: {
          allowNull: false,
          name: "musicalgenre_id",
        },
        onDelete: "cascade",
        hooks: true,
      });
    }
  }
  Musicalgenre.init(
    {
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        validate: {
          notNull: true,
          isUUID: 4,
        },
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
          notNull: true,
          len: [3, 50],
        },
      },
    },
    {
      sequelize,
      modelName: "Musicalgenre",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return Musicalgenre;
};
