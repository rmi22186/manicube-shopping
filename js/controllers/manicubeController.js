angular.module('manicube.controllers', [])

.controller('ManicubeOfferingsCtrl', function($scope, ManicubeOfferings) {
  $scope.offerings = ManicubeOfferings.offerings;
})

.controller('detailsCtrl', function($scope, ManicubeOfferings, $stateParams, Cart) {
  $scope.item = ManicubeOfferings.get($stateParams.item);

  $scope.quantity;
  var cartItems = Object.keys(Cart.items);

  for (var i = 0; i < cartItems.length; i++) {
    // console.log($scope.item.name);
    // console.log(cartItems[i]);
    // console.log(Cart.cart[$scope.item.name]);
    // console.log(cartItems[i].name)
    if ($scope.item.name === cartItems[i]) {
      $scope.quantity = Cart.items[$scope.item.name];
    } else {
      $scope.quantity = 0;
    }
  }

  $scope.addToCart = function(item) {
    Cart.setItem(item.name, item.price, $scope.quantity);
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