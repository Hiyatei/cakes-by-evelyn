'use strict';

angular.module('CakeApp', ['ngSanitize', 'ui.router', 'ui.bootstrap'])
.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: '/', // top of the main page
			templateUrl: 'partials/home.html',
			controller: 'HomeCtrl'
		})
		.state('gallery', {
			url: '/gallery',
			templateUrl: 'partials/gallery.html',
			controller: 'GalleryCtrl'
		})
		.state('detail', {
			url: '/gallery/{id}',
			templateUrl: 'partials/picture-detail.html',
			controller: 'DetailCtrl'
		})
		.state('menu', {
			url: '/menu',
			templateUrl: 'partials/menu.html',
			controller: 'MenuCtrl'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'partials/about.html',
			controller: 'InfoCtrl'
		})
		.state('orders', {
			url: '/orders',
			templateUrl: 'partials/order.html',
			controller: 'OrderCtrl'
		})

	$urlRouterProvider.otherwise('/');

})

.controller('cakeCtrl', ['$scope', '$http', function($scope, $http) {
/*
	$scope.hover = true;
	$scope.hover = function(x) {
		console.log("before: " + hover);
		hover = x;
		console.log("after: " + hover);
	}
*/
}])

.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
	
}])

.controller('GalleryCtrl', ['$scope', '$http', function($scope, $http) {
	
}])

.controller('DetailCtrl', ['$scope', '$http', function($scope, $http) {
	
}])

.controller('MenuCtrl', ['$scope', '$http', function($scope, $http) {
	
}])

.controller('InfoCtrl', ['$scope', '$http', function($scope, $http) {
	
}])

.controller('OrderCtrl', ['$scope', '$http', function($scope, $http) {
	
}])