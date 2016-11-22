(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var buyController = this;

  buyController.toBuyItems = ShoppingListCheckOffService.getToBuyItems();
  buyController.toBuy = function (itemIndex){
    ShoppingListCheckOffService.toBuy(itemIndex);
  }

}


AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtController = this;

  boughtController.boughtItems = ShoppingListCheckOffService.getBoughtItems();

}



function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items to be bought
  var toBuyItems = [{name: "cookies", quantity: 10},
                    {name: "chips", quantity: 10},
                    {name: "marshmellows", quantity: 10},
                    {name: "soft drinks", quantity: 10},
                    {name: "choco-bars", quantity: 10}];
  var boughtItems = [];

    this.toBuy = function(itemIndex){

    boughtItems.push(toBuyItems[itemIndex]);
    toBuyItems.splice(itemIndex, 1);
  };

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}



})();
