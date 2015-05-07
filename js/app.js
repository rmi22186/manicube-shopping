var manicubeApp = angular.module('manicubeApp', ['ui.router']);

manicubeApp.config(function($stateProvider, $urlRouterProvider) {
    
  $urlRouterProvider.otherwise('/shop');
  
  $stateProvider
    .state('shop', {
        url: '/shop',
        templateUrl: '../views/shop.html'
    })
    .state('cart', {
        url: '/cart',
        templateUrl: '../views/cart.html'
    });
    // // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
    
    // .state('about', {
    //     // we'll get to this in a bit
    // });
    
});

manicubeApp.controller('manicubeController', function($scope) {

  $scope.offerings = [
      { 'name': 'Manicure',
        'price': 12,
        'url': 'assets/manicure.gif'
      },
      { 'name': 'Haircut',
        'price': 20,
        'url': 'assets/haircut.gif'
      },
      
      { 'name': 'Massage',
        'price': 15,
        'url': 'assets/massage.gif'
      },
  ];

  $scope.giftCardPrices = [25, 50, 100];

});




// var routerApp = angular.module('routerApp', ['ui.router']);

