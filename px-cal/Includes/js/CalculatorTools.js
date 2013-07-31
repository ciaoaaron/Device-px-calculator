var CalculatorTool = angular.module('CalculatorTool', [])
.config(function( $routeProvider ){
	$routeProvider
	.when( '/', {
		templateUrl: 'view/menu.html'
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