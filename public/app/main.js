angular
	.module('app', [
		'ngRoute',
		'ngResource'
	])

	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
		$locationProvider.html5Mode(true);
		$routeProvider
			.when('/', {
				templateUrl: 'partials/home/home',
				controller: 'HomeCtrl'
			})
	}])

	;