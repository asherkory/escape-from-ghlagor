var ItemDetail = {
  bindings: {
    name: '=',
    category: '=',
    description: '=',
  },
  controllerAs: 'ctrl',
  template: [
    '<div class="item-detail">',
      '<h4>{{ ctrl.name }}</h4>',
      '<p><em>{{ ctrl.category }}</em></p>',
      '<p>{{ ctrl.description }}</p>',
    '</div>'
  ].join('')
}

angular
  .module('app')
  .component('itemDetail', ItemDetail)