angular.module('app')
.directive('boardDirective', function() {

	return {
		restrict: 'E',
		templateUrl: './views/boardTemplate.html'
	}

})