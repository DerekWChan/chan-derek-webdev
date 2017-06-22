(function() {
  angular
    .module('HearthstoneTheorycraftr')
    .controller('deckCollectionController', deckCollectionController);

  function deckCollectionController($location, $routeParams, deckService) {
    var model = this;
    model.userId = $routeParams.userId;
    model.decks = deckService.findAllDecksByUser(model.userId);
  }
})();
