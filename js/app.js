angular.module('manicubeApp', [])

.controller('manicubeController', function($scope) {

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