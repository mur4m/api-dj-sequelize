const { Club } = require("../models");
const { NotFoundError } = require("../helpers/errors");
const { BadRequestError } = require("../helpers/errors");

const clubsController = {
  getAllClubs: async () => {
    const clubsFound = await Club.findAll();
    // console.log("tous les clubs", clubsFound);
    if (clubsFound.length <= 0) {
      throw new NotFoundError(
        "not found",
        "Grr.. it's wat too cold, who dances in this weather anyway? Come back when ice creams melt :)"
      );
    }
    return clubsFound;
  },
  getClub: async (name) => {
    const foundClubName = await Club.findOne({
      where: {
        name: name,
      },
    });
    // console.log("found a club!", foundClubName);
    if (!foundClubName) {
      throw new NotFoundError(
        "not found",
        "sorry we could not find any clubs under that name please check for typos"
      );
    }
    return foundClubName;
  },

  addClub: async (data) => {
    const foundClubName = await Club.findOne({
      where: {
        name: data.name,
      },
    });
    // console.log("found a club!", foundClubName);
    if (foundClubName) {
      throw new BadRequestError(
        "bad request",
        "yo, even adidas is more original than you change that name real quick!"
      );
    }
    const createdClub = await Club.create(data);
    // console.log("fresh club created", createdClub);
    if (createdClub) {
      throw new BadRequestError(
        "bad request",
        "hey! don't be a copy cat, this club already exists!"
      );
    }
    return createdClub;
  },
};

module.exports = clubsController;
