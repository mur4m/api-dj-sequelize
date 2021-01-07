const { Musicalgenre } = require("../models");

const musicalGenresController = {
  getAllMusicalGenres: async () => {
    const musicalGenreFound = await Musicalgenre.findAll();
    console.log("tous les genres de musiques", musicalGenreFound);
    return musicalGenreFound;
  },
};

module.exports = musicalGenresController;
