var CalculatorTool = angular.module('CalculatorTool', ['ngRoute'])
.config(function( $routeProvider ){
	$routeProvider
	.when( '/', {
		controller: 'mainCtrl',
		templateUrl: 'view/main.html'
	})
	.when('/hypotenuse', {
		controller: 'HypotenuseCtrl',
		templateUrl: 'view/hypotenuse.html'
	})
	.when('/ppi', {
		controller: 'ppiCtrl',
		templateUrl: 'view/ppi.html'
	})
	.when('/device-width-to-css-width', {
		controller: 'WidthConverterCtrl',
		templateUrl: 'view/width-converter.html'
	});
});