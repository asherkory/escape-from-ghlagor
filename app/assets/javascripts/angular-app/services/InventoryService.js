function InventoryService (Item) {
  var srv = this;

  srv.currentItems = [];

  srv.addToInventory = function (itemId) {
    var item = Item.get({ id: itemId });
    srv.currentItems.push(item);
  };

  srv.getCurrentItems = function () {
    return srv.currentItems;
  }

}

angular
  .module('app')
  .service('InventoryService', InventoryService)