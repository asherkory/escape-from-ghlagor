var ItemSummary = {
  bindings: {
    name: '=',
    category: '=',
    id: '='
  },
  controllerAs: 'ctrl',
  template: [ // add a filter to search items
    '<div class="item-summary">',
      '<a ui-sref="home.story.item({id: ctrl.id})">',
        '<h4>{{ ctrl.name }}</h4>',
      '</a>',
      '<p>{{ ctrl.category }}</p>',
    '</div>'
  ].join('')
};

angular
  .module('app')
  .component('itemSummary', ItemSummary);