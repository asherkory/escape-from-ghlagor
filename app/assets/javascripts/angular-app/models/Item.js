function Item ($resource) {
  var Item = $resource('http://localhost:3000/api/items/:id.json', {id: '@id'});

  return Item;
}

angular
  .module('app')
  .factory('Item', Item)