angular.module('manicubeFactory', [])

.factory('ManicubeOfferings', function() {
  //store all items
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

      { 'name': 'Gift Card',
        'price': 25,
        'url': 'assets/giftcard.gif'
      },

      { 'name': 'Gift Card',
        'price': 50,
        'url': 'assets/giftcard.gif'
      },

      { 'name': 'Gift Card',
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
    console.log('?? go fish! ¯\\_(ツ)_/¯ ??');
  };

  var giftCardPrices = [25, 50, 100];

  return {
    offerings: offerings,
    get: get
  };
})

.factory('Cart', function() {
  var items = {};
  var totals = {};
  var gratuity = 0;
  //this cart action is called from the shopping detail page
  var setItem = function(name, price, quantity) {
    if (items[name] === undefined) {
      items[name] = {
        name: name,
        price: price,
        quantity: quantity,
        cost: quantity*price
      };
    } else {
      this.quantity = quantity;
      this.cost = quantity*price;
    }
    calculateTotals();
    console.log(items);
  };

  var remove = function(name) {
    console.log(name);
    if (items[name]) {
      console.log('hi');
      delete items[name];
    }
    calculateTotals();
    console.log(items);
  };

  var calculateSubtotals = function() {
    var subtotal = 0;
    for (var item in items) {
      subtotal += items[item].cost;
    }
    totals.subtotal = subtotal;
  };

  var calculateTax = function() {
    totals.tax = totals.subtotal*(0.08);
    console.log('tax', totals.tax);
  };

  //without gratuity, which is stored on the controller
  var calculateTotal = function() {
    totals.total = totals.subtotal + totals.tax;
  };  

  var calculateTotals = function() {
    calculateSubtotals();
    calculateTax();
    calculateTotal();
  };

  //this is the incrementer or decrementer on the cart page.  max of 10
  var incrementItem = function(item) {
    var itemQuantity = items[item].quantity;
    if (itemQuantity+1 <= 10) {
      items[item].quantity = (itemQuantity+=1);
      items[item].cost = (items[item].quantity*items[item].price);
    }
    calculateTotals();
  };

  var decrementItem = function(item) {
    var itemQuantity = items[item].quantity;
    if (itemQuantity-1 >= 0) {
      items[item].quantity = (itemQuantity-=1);
      items[item].cost = (items[item].quantity*items[item].price);
    }
    calculateTotals();
  };

  return {
    items: items,
    totals: totals,
    gratuity: gratuity,
    setItem: setItem,
    remove: remove,
    calculateSubtotals: calculateSubtotals,
    calculateTotal: calculateTotal,
    calculateTotals: calculateTotals,
    calculateTax: calculateTax,
    incrementItem: incrementItem,
    decrementItem: decrementItem
  };
});