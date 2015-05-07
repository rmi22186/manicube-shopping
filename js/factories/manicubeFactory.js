angular.module('manicubeFactory', [])

.factory('ManicubeOfferings', function() {

  var offerings = [
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

      { 'name': '$25 Gift Card',
        'price': 25,
        'url': 'assets/giftcard.gif'
      },

      { 'name': '$50 Gift Card',
        'price': 50,
        'url': 'assets/giftcard.gif'
      },

      { 'name': '$100 Gift Card',
        'price': 100,
        'url': 'assets/giftcard.gif'
      },
  ];

  var get = function(item) {
    for (var i = 0; i < offerings.length; i++) {
      if (offerings[i].name === item) {
        return offerings[i];
      }
    }
    console.log('?? ¯\\_(ツ)_/¯ ??');
  };

  var giftCardPrices = [25, 50, 100];

  return {
    offerings: offerings,
    get: get
  };
})

.factory('Cart', function() {

  var storage = window.localStorage;
  
  var setItem = function(item, count) {
    if (storage.getItem(item)) {
      var itemCount = storage.getItem(item);
    }
  };
  
  return {
    storage: storage,
    setItem: setItem
  };
});