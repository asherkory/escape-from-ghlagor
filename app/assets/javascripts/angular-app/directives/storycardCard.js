function StorycardCard (InventoryService) {
  return {
    scope: {},
    bindToController: {
      title: '=',
      content: '=',
      children: '=',
      items: '=',
      removable: '=',
      id: '='
    },
    controllerAs: 'ctrl',
    controller: function ($rootScope) {
      var ctrl = this;

      ctrl.addToInventory = function (itemId) { 
        InventoryService.addToInventory(itemId);
        var item = angular.element(document.querySelector('#item' + itemId));
        item.html('<span class="label label-success">Item added!</span>');
      };

      ctrl.changeStory = function (storyId) {
        $rootScope.$broadcast('changeStory', storyId);
      };   

      ctrl.notInInventory = function (itemId) {
        return InventoryService.notInInventory(itemId);
      };
    },
    template: [
      '<div>',
        '<h4>{{ ctrl.title }}</h4>',
        '<p ng-bind-html="ctrl.content"></p>',
        '<h4 ng-if="ctrl.items.length > 0">Items</h4>',
        '<ul>',
          '<div ng-repeat="item in ctrl.items" id="item{{ item.id }}">',
            '<li ng-if="ctrl.notInInventory(item.id)">', // if the item has not been added, show it
              '<h5>{{ item.name }} ',
              '<button class="btn btn-info" ng-click="ctrl.addToInventory(item.id)">Add to Inventory</button></h5>',
            '</li>',
          '</div>',
        '</ul>',
        '<div class="list-group">',
          '<a class="list-group-item choice" ng-repeat="choice in ctrl.children">',
            '<h5 ng-click="ctrl.changeStory(choice.id)">{{ choice.title }}</h5>', 
          '</a>',
        '</div>',
      '</div>'
    ].join(''),
    restrict: 'E',
    link: function (scope, element, attrs, ctrl) { 
      // angular.forEach(ctrl.removable, function (item) {
      //   InventoryService.removeFromInventory(item.id);
      // });
    }
  };
}

angular
  .module('app')
  .directive('storycardCard', StorycardCard)