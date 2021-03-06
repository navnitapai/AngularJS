(function(){
    const myapp = angular.module('myapp', [
        'myapp.cart',
        'myapp.product',
        'ui.router'
    ]);

    myapp.config(function($stateProvider){
        $stateProvider.state({
            name: 'products',
            url: '/products',
            component: 'productList',

            resolve : {
                list :  function(ProductService){
                    return ProductService.getProducts();
                }
            }
        });

        $stateProvider.state({
            name: 'productDetails',
            url: '/product/{productId}',
            component: 'productDetails'
        });

        $stateProvider.state({
            name: 'cart',
            url: '/cart',
            component: 'cart'
        });
    });


})(angular);