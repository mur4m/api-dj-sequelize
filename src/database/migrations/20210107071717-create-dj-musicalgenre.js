module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("DjMusicalgenres", {
      dj_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Djs",
          key: "id",
        },
        onDelete: "cascade",
      },
      musicalgenre_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: "Musicalgenres",
          key: "id",
        },
        onDelete: "cascade",
      },
      created_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updated_at: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("DjMusicalgenres");
  },
};
