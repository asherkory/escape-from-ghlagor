function CharacterShowController (Character, $stateParams, $window) {
  var ctrl = this;

  ctrl.visibleName = false;
  ctrl.visibleGender = false;

  ctrl.showNameForm = function () {
    ctrl.visibleName = !ctrl.visibleName; // hide or show name form
  };

  ctrl.showGenderForm = function () {
    ctrl.visibleGender = !ctrl.visibleGender // hide or show gender form
  }

  ctrl.character = Character.get({ id: $stateParams.id });

  ctrl.editCharacter = function (property) {
    ctrl.character.$update(function () {
      // $window.alert("Character saved!")
      if (property === 'g') {
        ctrl.showGenderForm();
      }
      else if (property === 'n') {
        ctrl.showNameForm();
      }
    });
  };
}

angular
  .module('app')
  .controller('CharacterShowController', CharacterShowController)