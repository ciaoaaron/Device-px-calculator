CalculatorTool.controller('mainCtrl', function( $rootScope, $scope ){
	
	console.log('main');
	$rootScope.updateNavStyle( { isMain: true } );
});