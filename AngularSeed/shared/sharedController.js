angular.module("providerApp")
	.controller('sharedController', ['$scope', '$rootScope', '$location', '$window', '$filter','$http', '$stateParams','$compile', 'MessagingService', 'ngTableParams', 'filterFilter', '$analytics',  function ($scope, $rootScope, $location, $window, $filter, $http, $stateParams,$compile, MessagingService, ngTableParams, filterFilter, $analytics) {
		console.log("Shared");	
	}]);
