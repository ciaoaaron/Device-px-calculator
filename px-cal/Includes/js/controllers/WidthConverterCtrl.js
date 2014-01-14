CalculatorTool.controller('WidthConverterCtrl', function( $rootScope, $scope ){
	var zf; //zoom factor
	$scope.introExpanded = false;
	$scope.tooltipClass = false;
	$scope.toggleIntro = function(){
		$scope.introExpanded = !$scope.introExpanded;
	}
	$scope.showToolTip = function(){
			$scope.tooltipClass = true;
	}
	$scope.convert = function( w, h, ppi ){
		//Make sure we convert all arguments from string to number.
		for( i = 0; i <= arguments.length-1; i++ ){
			if( typeof arguments[ i ] !== 'number' ){
				arguments[ i ] = parseFloat( arguments[ i ] );
			}
		}
		//figure out the zoom factor from ppi
		if( ppi < 200 ){
			zf = 1;
		}
		if( ppi >= 200 && ppi < 300 ){
			zf = 1.5;
		}
		if( ppi >= 300 ){
			zf = 2;
		}
		/*
		 * Devide both width and height by zoom factor to find CSS width and height.
		 * We cache this result in $scope.results so that we cold use it in the view
		 * to toggle class, among other things.
		 */
		$scope.results = {
			cssWidth: ( Math.round(w/zf) ),
			cssHeight: ( Math.round(h/zf) )
		}; 
		return $scope.results; 
	}
})