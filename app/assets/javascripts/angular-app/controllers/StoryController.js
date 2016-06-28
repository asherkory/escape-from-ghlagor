function StoryController ($scope, Storycard) {
  
  var ctrl = this;

  ctrl.story = Storycard.get({ id: 1 }); 

  $scope.$on('changeStory', function (event, storyId) {
    ctrl.story = Storycard.get({ id: storyId });
  });

}

angular
  .module('app')
  .controller('StoryController', StoryController)