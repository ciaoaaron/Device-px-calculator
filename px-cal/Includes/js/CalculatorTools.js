var CalculatorTool = angular.module('CalculatorTool', [])
.config(function( $routeProvider ){
	$routeProvider
	.when( '/', {
		templateUrl: 'view/menu.html'
	})
	.when('/hypotenuse', {
		templateUrl: 'view/hypotenuse.html'
	})
	.when('/ppi', {
		templateUrl: 'view/ppi.html'
	})
	.when('/device-width-to-css-width', {
		controller: 'WidthConverterCtrl',
		templateUrl: 'view/width-converter.html'
	});
});