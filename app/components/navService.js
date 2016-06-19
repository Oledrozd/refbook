angular.module('refbookApp')
    .factory ('navService', [ function () {

    var navItems = [

        {
            link: '#/home',
            iconClass: 'glyphicon-home',
            title: 'home'
        },

        {
            link: '#/appointments',
            iconClass: 'glyphicon-align-justify',
            title: 'my appointments'
        },

        {
            link: '#',
            iconClass: 'glyphicon-calendar',
            title: 'availability'
        },

        {
            link: '#/contacts',
            iconClass: 'glyphicon-user',
            title: 'contacts'
        },

        {
            link: '#/resources',
            iconClass: 'glyphicon-picture',
            title: 'resources'
        },

        {
            link: '#/schedule',
            iconClass: 'glyphicon-list-alt',
            title: 'schedule'
        },

        {
            link: '#',
            iconClass: 'glyphicon-envelope',
            title: 'communication'
        },

        {
            link: '#/reports',
            iconClass: 'glyphicon-paperclip',
            title: 'reports'
        },

        {
            link: '#',
            iconClass: 'glyphicon-cog',
            title: 'settings'
        },

        {
            link: '#',
            iconClass: 'glyphicon-cog',
            title: 'administrator'
        }

    ];

    return {
        navItems: navItems
    }

}]);