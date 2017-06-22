(function() {
  angular
    .module('HearthstoneTheorycraftr')
    .controller('deckEditorController', deckEditorController);

  function deckEditorController($location, $routeParams, deckService) {
    var model = this;
    model.userId = $routeParams.userId;
    model.deckId = $routeParams.deckId;
    model.deck = deckService.findDeckById(model.deckId);
  }
})();
