angular.module('manicube.controllers', [])

.controller('ManicubeOfferingsCtrl', function($scope, ManicubeOfferings) {
  $scope.offerings = ManicubeOfferings.offerings;
  localStorage.setItem('hello', 'world');

})

.controller('detailsCtrl', function($scope, ManicubeOfferings, $stateParams) {
  $scope.item = ManicubeOfferings.get($stateParams.item);
  console.log($scope.item);

})

.controller('cartCtrl', function($scope, Cart, $stateParams) {
    var hello = 'asdf';
});