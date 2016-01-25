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