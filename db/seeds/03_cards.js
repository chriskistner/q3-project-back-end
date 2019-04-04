
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {
          id: 1,
          name: 'Gaea\'s Skyfolk',
          red: 0,
          white: 0,
          blue: 1,
          black: 0,
          green: 1,
          colorless: 0,
          api_id: 26757
        },
        {
          id: 2,
          name: 'Lord of Atlantis',
          red: 0,
          white: 0,
          blue: 2,
          black: 0,
          green: 0,
          colorless: 0,
          api_id: 707
        },
        {
          id: 3,
          name: 'Merfolk Looter',
          red: 0,
          white: 0,
          blue: 1,
          black: 0,
          green: 0,
          colorless: 1,
          api_id: 130900
        },
        {
          id: 4,
          name: 'Quirion Dryad',
          red: 0,
          white: 0,
          blue: 0,
          black: 0,
          green: 1,
          colorless: 1,
          api_id: 130489
        },
        {
          id: 5,
          name: 'Land Grant',
          red: 0,
          white: 0,
          blue: 0,
          black: 0,
          green: 1,
          colorless: 1,
          api_id: 19633
        },
        {
          id: 6,
          name: 'Sleight of Hand',
          red: 0,
          white: 0,
          blue: 1,
          black: 0,
          green: 0,
          colorless: 0,
          api_id: 25557
        },
        {
          id: 7,
          name: 'Brainstorm',
          red: 0,
          white: 0,
          blue: 1,
          black: 0,
          green: 0,
          colorless: 0,
          api_id: 3897
        },
        {
          id: 8,
          name: 'Daze',
          red: 0,
          white: 0,
          blue: 1,
          black: 0,
          green: 0,
          colorless: 1,
          api_id: 189255
        },
        {
          id: 9,
          name: 'Foil',
          red: 0,
          white: 0,
          blue: 2,
          black: 0,
          green: 0,
          colorless: 2,
          api_id: 222766
        },
        {
          id: 10,
          name: 'Force of Will',
          red: 0,
          white: 0,
          blue: 2,
          black: 0,
          green: 0,
          colorless: 3,
          api_id: 3107
        },
        {
          id: 11,
          name: 'Gush',
          red: 0,
          white: 0,
          blue: 1,
          black: 0,
          green: 0,
          colorless: 4,
          api_id: 189258
        },
        {
          id: 12,
          name: 'Winter Orb',
          red: 0,
          white: 0,
          blue: 0,
          black: 0,
          green: 0,
          colorless: 2,
          api_id: 643
        },
        {
          id: 13,
          name: 'Curiosity',
          red: 0,
          white: 0,
          blue: 1,
          black: 0,
          green: 0,
          colorless: 0,
          api_id: 45240
        },
        {
          id: 14,
          name: 'Island',
          red: 0,
          white: 0,
          blue: 0,
          black: 0,
          green: 0,
          colorless: 0,
          api_id: 129606
        },
        {
          id: 15,
          name: 'Tropical Island',
          red: 0,
          white: 0,
          blue: 0,
          black: 0,
          green: 0,
          colorless: 0,
          api_id: 884
        }
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('cards_id_seq', (SELECT MAX(id) FROM cards))`
      )
    })
};
