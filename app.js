(function(){
	 // angularJS is called by angular
	 // "store" is the app name
	 // [] are the dependencies
	var app = angular.module("store", []);

		// Controllers are where we define the app's behavior
		// by defining functions and values
		// 2nd argument is a function that is called when 
		// StoreController is called
	app.controller("StoreController", function(){
		this.product = gem;
	});

	var gem = {
		name: "Dodecahedron", 
		price: 2.95,
		description: "Some gems have hidden qualities beyond their luster, beyond their shine... Dodeca is one of those gems.",
	}

})();


	

