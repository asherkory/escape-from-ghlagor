angular
  .module('app', ['ui.router', 'ngResource', 'templates', 'ngSanitize'])
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
      .state('home.character', {
        url: 'character',
        templateUrl: 'home/character.html',
        controller: 'CharacterController as ctrl'
      })
      .state('home.character.new', {
        url: '/new',
        templateUrl: 'home/character/new.html',
        controller: 'CharacterNewController as ctrl'
      })
      .state('home.character.index', {
        url: '/index',
        templateUrl: 'home/character/index.html',
        controller: 'CharacterIndexController as ctrl'
      })
      .state('home.character.show', {
        url: '/:id',
        templateUrl: 'home/character/show.html',
        controller: 'CharacterShowController as ctrl'
      })
      .state('home.story', {
        url: 'story',
        templateUrl: 'home/story.html',
        controller: 'StoryController as ctrl'
      })
      .state('home.story.inventory', {
        url: '/inventory',
        templateUrl: 'home/story/inventory.html',
        controller: 'InventoryController as ctrl'
      })
      .state('home.story.item', {
        url: '/item/:id',
        templateUrl: 'home/story/item.html',
        controller: 'ItemController as ctrl'
      })

    $urlRouterProvider.otherwise('/');
  });
