angular.module('refbookApp')
    .factory ('navService', [ function () {

    var navItems = [

        {
            link: '/home',
            iconClass: 'glyphicon-home',
            title: 'home'
        },

        {
            link: '/appointments',
            iconClass: 'glyphicon-align-justify',
            title: 'my appointments'
        },

        {
            link: '#',
            iconClass: 'glyphicon-calendar',
            title: 'availability'
        },

        {
            link: '/contacts',
            iconClass: 'glyphicon-user',
            title: 'contacts'
        },

        {
            link: '/resources',
            iconClass: 'glyphicon-picture',
            title: 'resources'
        },

        {
            link: '/competition',
            iconClass: 'glyphicon-list-alt',
            title: 'competition'
        }

    ];

    return {
        navItems: navItems
    }

}]);