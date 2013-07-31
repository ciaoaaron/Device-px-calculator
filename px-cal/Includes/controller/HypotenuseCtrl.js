CalculatorTool.controller('HypotenuseCtrl', function( $scope ){
	$scope.introExpanded = false;
	$scope.convert = function( w, h ){
		$scope.result = Math.sqrt((w * w) + (h * h));
		return $scope.result;
	}

})