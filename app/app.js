angular.module('app', ['ui.router'])
	.config(function($stateProvider, $urlRouterProvider) {

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: './views/homeView.html'
			})
			.state('onePlayer', {
				url:'/one-player',
				templateUrl: './views/onePlayer.html',
				controller: 'onePlayerCtrl'
			})
			.state('twoPlayer', {
				url: '/two-player',
				templateUrl: './views/twoPlayer.html',
				controller: 'twoPlayerCtrl'
			})


		$urlRouterProvider
			.otherwise('/');

	})