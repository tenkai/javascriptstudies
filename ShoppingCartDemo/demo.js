// shopping cart simulation
var basketModule = (function () {
    var basket = [];

    return {
        addItem: function (value) {
            basket.push(value);
        },
        getItemCount: function () {
            return basket.length;
        },
        getTotal: function () {
            var p = basket.length,
                q = 0;
            while (p--) {
                q += basket[p].price;
            }
            return q;

        }
    }

})();


basketModule.addItem({
    item: "cheese",
    price: 2.50
})

basketModule.addItem({
    item: "bread",
    price: 4.00
})

console.log("number of items in cart: " + basketModule.getItemCount());
console.log("cart total: " + basketModule.getTotal());
