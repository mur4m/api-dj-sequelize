const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class DjMusicalgenre extends Model {
    static associate(models) {
      models.DjMusicalgenre.belongsTo(models.Musicalgenre, {
        foreignKey: {
          allowNull: false,
          name: "musicalgenre_id",
        },
      });

      models.DjMusicalgenre.belongsTo(models.Dj, {
        foreignKey: {
          allowNull: false,
          name: "dj_id",
        },
        onDelete: "cascade",
        hooks: true,
      });
    }
  }
  DjMusicalgenre.init(
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
      dj_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Djs",
          key: "id",
        },
        onDelete: "cascade",
        hooks: true,
      },
      musicalgenre_id: {
        type: DataTypes.UUID,
        allowNull: false,
        references: {
          model: "Musicalgenres",
          key: "id",
        },
        onDelete: "cascade",
        hooks: true,
      },
    },
    {
      sequelize,
      modelName: "DjMusicalgenre",
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );
  return DjMusicalgenre;
};
