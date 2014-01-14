CalculatorTool.controller('navCtrl', function( $rootScope, $scope ){
	$scope.selectedItem = null;
	$scope.selectItem = function( item ){
		$scope.selectedItem = item;
	}

});