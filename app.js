(function(){
	 // angularJS is called by angular
	 // "store" is the app name
	 // [] are the dependencies
	 /*now store depends of store-products (products.js)*/
	var app = angular.module("store", ["store-products"]);

		// Controllers are where we define the app's behavior
		// by defining functions and values
		// 2nd argument: StoreController needs the $http service
		// so $http gets injected as an argument
	app.controller("StoreController", ["$http", function($http){
		
		var store = this;

		/*initialize prodcuts to an empty array, since the page will
		render before our data returns from out get request*/
		store.products = [];

		/*$http returns a "Promise", so success() gets the data*/
		$http.get("/products.json").success(function(data){
			store.products = data;
		});
	}]);

	app.controller("ReviewController", function(){
		this.review = {};

		this.addReview = function(product){
			// push review onto this product's reviews array
			product.reviews.push(this.review);

			// clear out the review, so the form will reset
			this.review = {};
		};
	});
})();
