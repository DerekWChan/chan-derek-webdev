(function() {
  angular
    .module('HearthstoneTheorycraftr')
    .factory('deckService', deckService);

  function deckService() {
    var decks = [{
        _id: "1",
        creatorId: "1",
        name: "Burgle Rogue",
        class: "Rogue",
        format: "Wild",
        description: "4THEMEMES"
      },
      {
        _id: "2",
        creatorId: "1",
        name: "OTK Priest",
        class: "Priest",
        format: "Wild",
        description: "Prophet Velen MVP"
      },
      {
        _id: "3",
        creatorId: "1",
        name: "Dino Hunter",
        class: "Hunter",
        format: "Standard",
        description: "rawr"
      }
    ];
    var api = {
      createDeck: createDeck,
      updateDeck: updateDeck,
      deleteDeck: deleteDeck,
      findAllDecksByUser: findAllDecksByUser
    };
    return api;

    function createDeck(newDeck) {
      decks.push(newDeck);
    }

    function updateDeck(deckId, newInfo) {
      for (var d in decks) {
        var deck = decks[d];
        if (deck._id === deckId) {
          deck.name = newInfo.name;
          deck.class = newInfo.class;
          deck.format = newInfo.format;
          deck.description = newInfo.description;
        }
      }
    }

    function deleteDeck(deckId) {
      for (var d in decks) {
        var deck = decks[d];
        if (deck._id === deckId) {
          decks.split(d, 1);
        }
      }
    }

    function findAllDecksByUser(userId) {
      var decksFound = [];

      for (var d in decks) {
        var deck = decks[d];
        if (deck.creatorId === userId) {
          decksFound.push(deck);
        }
      }
      return decksFound;
    }
  }
})();
