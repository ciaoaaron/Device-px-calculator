CalculatorTool.controller('ppiCtrl', function( $rootScope, $scope ){
	$rootScope.updateNavStyle( { isMain: false} );
	$scope.introExpanded = false;
	$scope.convert = function( w, h, di ){
		var dp = Math.sqrt((w * w) + (h * h));
		$scope.result = dp/di;
		return $scope.result;
	}

})