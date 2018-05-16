// DIRECTIVES
antariweather.directive("weatherReport", function(){
	return {
		restrict: 'E',
		templateUrl: 'directives/weatherpanel.htm',
		replace: true,
		scope: {
			weatherDay: "=",
			convertToStandard: "&",
			convertToDate: "&",
			dateFormat: "@"
		}
	}
})