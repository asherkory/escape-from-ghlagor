function StorycardCard () {
  return {
    scope: {},
    bindToController: {
      title: '=',
      content: '=',
      children: '=',
      items: '=',
      id: '=',
      removableItems: '='
    },
    controllerAs: 'ctrl',
    controller: function ($rootScope, InventoryService) {
      var ctrl = this;

      ctrl.addToInventory = function (itemId) { 
        InventoryService.addToInventory(itemId);
      };

      ctrl.changeStory = function (storyId) {
        $rootScope.$broadcast('changeStory', storyId);
      };   
    },
    template: [
      '<div class="storycard-card">',
        '<h3>{{ ctrl.title }}</h3>',
        '<h4>{{ ctrl.removableItems }}</h4>', // why isn't this showing up?
        '<p ng-bind-html="ctrl.content"></p>',
        '<ul>',
          '<li ng-repeat="choice in ctrl.children">',
            '<h4 ng-click="ctrl.changeStory(choice.id)">{{ choice.title }} {{ choice.id }}</h4>', 
          '</li>',
        '</ul>',
        '<h3 ng-if="ctrl.items.length > 0">Items:</h3>',
        '<ul>',
          '<li ng-repeat="item in ctrl.items">',
            '<h4>{{ item.name }}</h4>',
            '<button ng-click="ctrl.addToInventory(item.id)">Add to Inventory</button>',
          '</li>',
        '</ul>',
      '</div>'
    ].join(''),
    restrict: 'E',
    // link: function (scope, element, attrs, ctrl, InventoryService) { // this probably isn't working; put in controller?
    //   angular.forEach(ctrl.removableItems, function (item) {
    //     InventoryService.removeFromInventory(item.id);
    //   });
    // }
  };
}

angular
  .module('app')
  .directive('storycardCard', StorycardCard)