angular.module("providerApp")
    .config(function ($routeProvider) {
        $routeProvider
          .when('/', {
              templateUrl: 'module1/module1.html',
              controller: 'module1Controller'
           })
          .otherwise({
              redirectTo: '/'
          });
    })