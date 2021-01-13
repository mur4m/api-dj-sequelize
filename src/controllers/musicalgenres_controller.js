const { Musicalgenre } = require("../models");
const { NotFoundError } = require("../helpers/errors");

const musicalGenresController = {
  getAllMusicalGenres: async () => {
    const musicalGenreFound = await Musicalgenre.findAll();
    // console.log("tous les genres de musiques", musicalGenreFound);
    if (musicalGenreFound.length === 0) {
      throw new NotFoundError(
        "not found",
        "sorry our musicalgenre is too refined to suit your taste at the moment, please come back later when you know what a sonnet is"
      );
    }
    return musicalGenreFound;
  },
};

module.exports = musicalGenresController;
