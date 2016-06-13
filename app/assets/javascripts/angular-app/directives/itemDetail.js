var ItemDetail = {
  bindings: {
    name: '=',
    category: '=',
    description: '=',
  },
  controllerAs: 'ctrl',
  template: [
    '<div>',
      '<h4>{{ ctrl.name }}</h4>',
      '<p><em>{{ ctrl.category }}</em></p>',
      '<p>{{ ctrl.description }}</p>',
    '</div>'
  ].join('')
}

angular
  .module('app')
  .component('itemDetail', ItemDetail)