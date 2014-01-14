CalculatorTool.controller('ppiCtrl', function( $rootScope, $scope ){
	$scope.introExpanded = false;
	$scope.toggleIntro = function(){
		$scope.introExpanded = !$scope.introExpanded;
	}
	$scope.convert = function( w, h, di ){
		var dp = Math.sqrt((w * w) + (h * h));
		$scope.result = Math.round(dp/di);
		return $scope.result;
	}

})