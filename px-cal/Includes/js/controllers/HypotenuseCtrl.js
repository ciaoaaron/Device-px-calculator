CalculatorTool.controller('HypotenuseCtrl', function( $rootScope, $scope ){
	$scope.introExpanded = false;
	$scope.convert = function( w, h ){
		$scope.result = Math.round(Math.sqrt((w * w) + (h * h)));
		return Math.round($scope.result);
	}
})