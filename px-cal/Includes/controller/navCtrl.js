CalculatorTool.controller('navCtrl', function( $rootScope, $scope ){
	$rootScope.updateNavStyle = function( obj ){
		if( obj.isMain ){
			$scope.navStyle = { supressed: false };
			return;
		}
		$scope.navStyle = { supressed: true };
	}
});