function InventoryService (Item, $window) {
  var srv = this;

  srv.currentItems = [];

  srv.addToInventory = function (itemId) {
    var item = Item.get({ id: itemId });
    srv.currentItems.push(item);
  };

  srv.removeFromInventory = function (itemId) {
    var position = srv.currentItems.findIndex(function (item) {
      return item.id === itemId;
    });
    srv.currentItems.splice(position, 1);
    $window.alert("Item removed!");
  };

  srv.getCurrentItems = function () {
    return srv.currentItems;
  }
}

angular
  .module('app')
  .service('InventoryService', InventoryService)