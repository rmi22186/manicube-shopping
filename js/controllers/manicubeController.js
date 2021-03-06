angular.module('manicube.controllers', [])

.controller('ManicubeOfferingsCtrl', function($scope, ManicubeOfferings) {
  $scope.offerings = ManicubeOfferings.offerings;
})

.controller('detailsCtrl', function($scope, ManicubeOfferings, $stateParams, Cart, $location) {
  $scope.item = ManicubeOfferings.get($stateParams.item);

  $scope.quantity;
  var cartItems = Object.keys(Cart.items);

  for (var i = 0; i < cartItems.length; i++) {
    if ($scope.item.name === cartItems[i]) {
      $scope.quantity = Cart.items[$scope.item.name];
    } else {
      $scope.quantity = 0;
    }
  }

  $scope.addToCart = function(item) {
    Cart.setItem(item.name, item.price, $scope.quantity);
    $location.path("/cart");
  };
})

.controller('cartCtrl', function($scope, Cart) {
  $scope.items = Cart.items;
  $scope.totals = Cart.totals;

  $scope.gratuity = 0;

  $scope.decrement = function(item) {
    Cart.decrementItem(item);
  };

  $scope.increment = function(item) {
    Cart.incrementItem(item);
  };

  $scope.remove = function(item) {
    Cart.remove(item);
  };
});