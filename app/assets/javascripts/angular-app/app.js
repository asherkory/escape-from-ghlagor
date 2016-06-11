angular
  .module('app', ['ui.router', 'ngResource', 'templates'])
  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'home.html',
        controller: 'HomeController as ctrl'
      })
      .state('home.about', {
        url: 'about',
        templateUrl: 'home/about.html',
        controller: 'AboutController as ctrl'
      })
      .state('home.story', {
        url: 'story',
        templateUrl: 'home/story.html',
        controller: 'StoryController as ctrl'
      })
      .state('home.story.inventory', {
        url: '/inventory',
        templateUrl: 'home/story/inventory.html',
        controller: 'InventoryController as ctrl' // should I be using resolves?
      })
      .state('home.story.item', {
        url: '/item/:id',
        templateUrl: 'home/story/item.html',
        controller: 'ItemController as ctrl'
      })

    $urlRouterProvider.otherwise('/');
  });
