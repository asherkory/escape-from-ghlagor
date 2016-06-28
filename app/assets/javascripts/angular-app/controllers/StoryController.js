function StoryController ($scope, Storycard) {
  
  var ctrl = this;

  ctrl.story = Storycard.get({ id: 1 });
  
  // ctrl.newItems = []; // only display items if they're not already in InventoryService's currentItems

  // ctrl.getNewItems = function () {
  //   return ctrl.newItems = InventoryService.selectNewItems(ctrl.story.storycard.items); 
  // } 
      // every time a storycard displays, check each item to see if it's already in currentItems
      

  $scope.$on('changeStory', function (event, storyId) {
    ctrl.story = Storycard.get({ id: storyId });
  });

}

angular
  .module('app')
  .controller('StoryController', StoryController)