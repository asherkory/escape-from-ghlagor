function InventoryController (InventoryService) {
  var ctrl = this;

  ctrl.currentItems = InventoryService.getCurrentItems();

}

angular
  .module('app')
  .controller('InventoryController', InventoryController);