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
  };

  srv.checkInventory = function (itemId) {

  };

  // srv.selectNewItems = function (storyItems) {
  //   if (srv.currentItems.length > 0) {
  //     var newItems = srv.currentItems.map(function (item) {
  //       var position = storyItems.findIndex(function (storyItem) { // find the index of the existing item in storyItems
  //         return storyItem.id === item.id;
  //       });
  //       return storyItems.splice(position, 1); // remove already existing item from storyItems
  //     });

  //     var flattenedNewItems = newItems.reduce(function (a, b) { // flatten the nested array
  //       return a.concat(b);
  //     });
  //     return flattenedNewItems;
  //   }
  //   else {
  //     return storyItems;
  //   }
  // };

}

angular
  .module('app')
  .service('InventoryService', InventoryService)