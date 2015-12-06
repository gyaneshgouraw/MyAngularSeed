angular.module("providerApp",
	[
		'ui.router',
		'ngRoute', 
		'ngTable', 
		'ngCookies', 
		'ui.bootstrap', 
		'angulartics', 
		'angulartics.google.analytics',
        'blockUI',        
	])
	.config(['$analyticsProvider', function ($analyticsProvider){
        $analyticsProvider.virtualPageviews(false);
    }])
    // .config(['$httpProvider', function($httpProvider) {
    //     delete $httpProvider.defaults.headers.common["X-Requested-With"]        
    // }])

  // something related to template caching - currently not in use
  .run(['$templateCache', '$rootScope', '$state', '$stateParams', function ($templateCache, $rootScope, $state, $stateParams) {

        // <ui-view> contains a pre-rendered template for the current view
        // caching it will prevent a round-trip to a server at the first page load
        var view = angular.element('#ui-view');
        $templateCache.put(view.data('tmpl-url'), view.html());

        // Allows to retrieve UI Router state information from inside templates
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;

        $rootScope.$on('$stateChangeSuccess', function (event, toState) {

            // Sets the layout name, which can be used to display different layouts (header, footer etc.)
            // based on which page the user is located
            $rootScope.layout = toState.layout;
        });
    }]);