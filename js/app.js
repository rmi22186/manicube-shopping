angular.module('manicubeApp', ['ui.router', 'manicube.controllers', 'manicubeFactory'])

.config(function($stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.otherwise('/shop');
  
  $stateProvider
    .state('shop', {
      url: '/shop',
      templateUrl: '../views/shop.html',
      controller: 'ManicubeOfferingsCtrl'
    })
    .state('shopDetails', {
      url: '/shop/:item',
      templateUrl: '../views/details.html',
      controller: 'detailsCtrl'
    })
    .state('cart', {
      url: '/cart',
      templateUrl: '../views/cart.html',
      controller: 'cartCtrl'
    });
});