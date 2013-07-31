CalculatorTool.controller('ppiCtrl', function( $scope ){
	$scope.introExpanded = false;
	$scope.convert = function( w, h, di ){
		var dp = Math.sqrt((w * w) + (h * h));
		$scope.result = dp/di;
		return $scope.result;
	}

})