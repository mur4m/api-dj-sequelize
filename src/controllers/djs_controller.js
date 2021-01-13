const { pick } = require("lodash");
const { Dj, Musicalgenre, DjMusicalgenre } = require("../models");
const { NotFoundError } = require("../helpers/errors");
const { BadRequestError } = require("../helpers/errors");

const djsController = {
  getAllDjs: async () => {
    const djsFound = await Dj.findAll();
    // console.log("tous les Dj", djsFound);
    if (djsFound.length <= 0) {
      throw new NotFoundError(
        "not found",
        "we did not hire any djs at the moment, please come back please come back right before summer!."
      );
    }
    return djsFound;
  },

  getDj: async (name) => {
    const foundName = await Dj.findOne({
      where: {
        name: name,
      },
    });
    // console.log("dj's name", foundName);
    if (!foundName) {
      throw new NotFoundError(
        "not found",
        "the dj you're looking for could not be found, please try to look for another one."
      );
    }
    return foundName;
  },

  addDj: async (data) => {
    const djFoundName = await Dj.findOne({
      where: {
        name: data.name,
      },
    });
    if (djFoundName) {
      throw new BadRequestError(
        "bad request",
        "yo, even adidas is more original than you change that name real quick!"
      );
    }
    const dj = await Dj.create(data);
    console.log("musical genre", data);
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
    if (updatedName) {
      throw new BadRequestError(
        "bad request",
        "hey there, you're trying to update your data right? so why did you just send the same thing once more?"
      );
    }
    // console.log("brand new name", data.nameame);

    return `updated name to ${data.name}`;
  },

  deleteDj: async (name) => {
    const deletedDjName = await Dj.destroy({
      where: { name: name },
    });
    // console.log("who am i?", `${message}`);
    if (!deletedDjName) {
      throw new BadRequestError(
        "bad request",
        "what is ecdubeuiedg? exactly we cannot delete something that does not exit either =_="
      );
    }
    return deletedDjName;
  },
};

module.exports = djsController;
