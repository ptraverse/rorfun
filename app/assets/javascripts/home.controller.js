(function () {
	
	'use strict';

	console.log('... and rolling .. ');

	angular.module('home')
		.controller("homeController",
		['$scope'],
		function($scope) {			
			$scope.foo = 'bar';
	});

	console.log('... and rolling AGAIN ');

})();