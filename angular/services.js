// SERVICES

antariweather.service('cityService',function(){
	this.city = "New York";
});

antariweather.service('weatherService',['$resource', function($resource){
	this.GetWeather = function(city, days){
		var weatherAPI = $resource("//api.openweathermap.org/data/2.5/forecast",
		{
			callback: "JSON_CALLBACK"
		},
		{
			get: {method: "JSONP"}
		}
		);
	return weatherAPI.get({ q: city, cnt: days, APPID: "c7caa6ff1f01fd525cf0806438a2f41f" });
	};
}]);