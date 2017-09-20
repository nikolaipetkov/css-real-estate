var app = angular.module('realEstatePractise',[
	'ui.router']);
app.controller('mainController', function($scope, $http, $state) {
})

app.directive('changeClassOnScroll', ['$window', function($window){
	return {
		restrict: 'A',
		link: function(scope, element, attrs, controller) {

			scope.lastScrollTop = 0;
			scope.currentScrollPosition = $window.pageYOffset;

				angular.element($window).bind("scroll", function() {
					scope.currentScrollPosition = $window.pageYOffset;
				if(scope.currentScrollPosition === 0){
					element.removeClass('site-header-up');
					element.removeClass('site-header-down');
					element.addClass('site-header');
				}
				else if(scope.currentScrollPosition > scope.lastScrollTop) {
					element.removeClass('site-header-down');
		            element.addClass('site-header-up');
		        } else if(scope.currentScrollPosition < scope.lastScrollTop && !(scope.currentScrollPosition === 0)) {
		        	element.removeClass('site-header-up');
		            element.addClass('site-header-down');
		        }

		        scope.lastScrollTop = $window.pageYOffset;
			});
		}
	}
}]);