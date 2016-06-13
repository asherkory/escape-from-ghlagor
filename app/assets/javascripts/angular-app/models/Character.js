function Character ($resource) {
  var Character = $resource('http://localhost:3000/api/characters/:id.json', {id: '@id'});

  return Character;
}

angular
  .module('app')
  .factory('Character', Character)