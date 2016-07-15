'use strict';

angular.module('refbookApp', [ 'ngRoute', 'ui.sortable', 'ngMaterial', 'materialCalendar' ]);

/*Router settings*/
angular.module('refbookApp')
    .config(['$routeProvider', function($routeProvider) {

        $routeProvider

            .when('/appointments', {
                templateUrl: 'components/appointments.component/appointments.tmpl.html',
                controller: 'appointmentsController'
            })

            .when('/contacts', {
                templateUrl: 'components/contacts.component/contacts.tmpl.html',
                //controller: 'contactsController'
            })

            .when('/availability', {
                templateUrl: 'components/availability.component/availability.tmpl.html',
                controller: 'availabilityController'
            })

            .when('/home', {
                templateUrl: 'components/home.component/home.tmpl.html',
                //controller: 'homeController'
            })

            .when('/profile', {
                templateUrl: 'components/profile.component/profile.tmpl.html',
                //controller: 'profileController'
            })

            .when('/reports', {
                templateUrl: 'components/reports.component/reports.tmpl.html',
                //controller: 'reportsController'
            })

            .when('/resources', {
                templateUrl: 'components/resources.component/resources.tmpl.html',
                //controller: 'resourcesController'
            })

            .when('/schedule', {
                templateUrl: 'components/schedule.component/schedule.tmpl.html',
                //controller: 'scheduleController'
            })

            .otherwise({
                redirectTo: '/home'
            })
    }]);

