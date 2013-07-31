CalculatorTool.controller('HypotenuseCtrl', function( $rootScope, $scope ){
	$rootScope.updateNavStyle( { isMain: false } );
	$scope.introExpanded = false;
	$scope.convert = function( w, h ){
		$scope.result = Math.sqrt((w * w) + (h * h));
		return $scope.result;
	}
})