const { Club } = require("../models");

const clubsController = {
  getAllClubs: async () => {
    const clubsFound = await Club.findAll();
    console.log("tous les clubs", clubsFound);

    return clubsFound;
  },
  getClub: async (name) => {
    const foundClubName = await Club.findOne({
      where: {
        name: name,
      },
    });
    // console.log("found a club!", foundClubName);

    return foundClubName;
  },

  addClub: async (data) => {
    const createdClub = await Club.create(data);
    console.log("fresh club created", createdClub);
    return createdClub;
  },
};

module.exports = clubsController;
