function Storycard ($resource) {
  var Storycard = $resource('http://localhost:3000/api/storycards/:id.json', {id: '@id'} );

  return Storycard;
}

angular
  .module('app')
  .factory('Storycard', Storycard)