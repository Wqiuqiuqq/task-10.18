var app=angular.module("app",["ui.router"]);

app.config(function($stateProvider,$urlRouterProvider){
	$stateProvider
		.state("shopping",{
			url:"/shopping",
			templateUrl:"App/View/shopping.html",
			controller:"shoppingController"
		})
	$urlRouterProvider.otherwise("/shopping");
})