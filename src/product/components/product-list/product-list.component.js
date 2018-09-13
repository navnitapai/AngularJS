(function(){
    angular.module('myapp.product')
        .component('productList', {
            templateUrl: 'src/product/components/product-list/product-list.component.html',
            bindings : {
                list : '<'
            }
        })
})(angular)