/** Module declaration */
var shoppingApp = angular.module('shoppingApp', []);

/** Controller declaration */
shoppingApp.controller('ItemListController', function($scope) {

    $scope.item = {};

/** Declaring Array of items */
    $scope.items = [
        {product: 'Bread', quantity: 5},
        {product: 'Chocolate', quantity: 10},
        {product: 'Biscuit', quantity: 4},
        {product: 'Sandwich', quantity: 6}
    ];
/** Function for adding item */
    $scope.addItem = function() {
        $scope.items.push({product: $scope.item.product, quantity: $scope.item.quantity});
        $scope.item.product = $scope.item.quantity = '';
        alert("Item will be added");
    };

/** Function for editing item */
    $scope.editItem = function(index){
        $scope.item = $scope.items[index];
        $scope.edit = true;
    };

/** Function for saving changes */
    $scope.saveChanges = function(index){
        $scope.item = {};
        $scope.edit = false;
        alert("Item successfully edited");
    };

/** Function for deleting item */
    $scope.deleteItem = function(index){
        $scope.items.splice(index, 1);
        alert("Item will be deleted");
    };
});