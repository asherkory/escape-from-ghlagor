function CharacterShowController (Character, $stateParams) {
  var ctrl = this;

  ctrl.character = Character.get({ id: $stateParams.id });
}

angular
  .module('app')
  .controller('CharacterShowController', CharacterShowController)