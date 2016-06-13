function CharacterIndexController (Character) {
  var ctrl = this;

  ctrl.characters = Character.get();
}

angular
  .module('app')
  .controller('CharacterIndexController', CharacterIndexController)