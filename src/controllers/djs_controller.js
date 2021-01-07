const { pick } = require("lodash");

const { Dj, Musicalgenre, DjMusicalgenre } = require("../models");
const { NotFoundError } = require("../helpers/errors");

const djsController = {
  getAllDjs: async () => {
    const djsFound = await Dj.findAll();
    // console.log("tous les Dj", djsFound);
    return djsFound;
  },

  getDj: async (name) => {
    const foundName = await Dj.findOne({
      where: {
        name: name,
      },
    });
    // console.log("dj's name", foundName);
    return foundName;
  },

  addDj: async (data) => {
    const dj = await Dj.create(data);
    // console.log("musical genre", data);
    const allGenres = await Musicalgenre.findAll();
    const musical_genres = data.musical_genres;

    musical_genres.forEach(async (genre) => {
      allGenres.forEach(async (dbGenre) => {
        if (dbGenre.dataValues.name === genre)
          await dj.addMusicalgenre(dbGenre);
      });
    });

    return dj;
  },

  updateDj: async (name, data) => {
    // console.log("*******DATA*******", data);
    const updatedName = await Dj.update(
      { name: data.name, url_name: data.name },
      {
        where: {
          name: name,
        },
      }
    );
    // console.log("brand new name", data.nameame);

    return `updated name to ${data.name}`;
  },

  deleteDj: async (name, message) => {
    const deletedDjName = await Dj.destroy({
      where: { name: name },
    });
    console.log("who am i?", `${message}`);

    return `${message}`;
  },
};

module.exports = djsController;
