// ROUTES

antariweather.config(function($routeProvider){

	$routeProvider
	.when('/',{
		templateUrl: 'pages/home.htm',
		controller: 'homeController'
	})
	.when('/forecast',{
		templateUrl: 'pages/forecast.htm',
		controller: 'forecastController'
	})
	.when('/mylocation',{
		templateUrl: 'pages/forecast.htm',
		controller: 'myLocController'
	})
	.when('/forecast/:days',{
		templateUrl: 'pages/forecast.htm',
		controller: 'forecastController'
	})

});