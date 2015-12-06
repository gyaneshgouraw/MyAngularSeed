angular.module("providerApp")
    .controller('module1Controller', ['$scope', '$rootScope', '$location', '$window', '$filter', '$http', '$stateParams', '$compile', 'MessagingService', 'ngTableParams', 'filterFilter', '$analytics',  function ($scope, $rootScope, $location, $window, $filter, $http, $stateParams, $compile, MessagingService, ngTableParams, filterFilter, $analytics) {
        console.log("module1controller");

    }])