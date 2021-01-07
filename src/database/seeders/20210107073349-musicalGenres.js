const genres = require("../seeds/20200901155256-musical_genres.js");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Musicalgenres", genres, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Musicalgenres", null, {});
  },
};
