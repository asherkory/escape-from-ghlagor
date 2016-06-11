function ItemController (Item, $stateParams) {
  var ctrl = this;

  ctrl.item = Item.get({ id: $stateParams.id });
}

angular
  .module('app')
  .controller('ItemController', ItemController)