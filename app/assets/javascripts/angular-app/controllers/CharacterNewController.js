function CharacterNewController (Character, $location) {
  var ctrl = this;

  ctrl.character = new Character();

  ctrl.addCharacter = function () {
    ctrl.character.$save(function () {
      $location.path('/character/index');
    });
  };
}

angular
  .module('app')
  .controller('CharacterNewController', CharacterNewController)