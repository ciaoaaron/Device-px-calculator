CalculatorTool.controller('Hypotenuse', function( $scope ){

	$scope.convert = function( w, h ){
		$scope.result = Math.sqrt((w * w) + (h * h));
		return $scope.result;
	}

})