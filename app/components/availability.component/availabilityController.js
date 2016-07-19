angular.module('refbookApp')
    .controller ('availabilityController', ['$scope', '$filter', 'MaterialCalendarData', function ( $scope, $filter, MaterialCalendarData ) {

        $scope.dayFormat = "d";

        // To select a single date, make sure the ngModel is not an array.
        $scope.selectedDate = null;

        // If you want multi-date select, initialize it as an array.
        $scope.selectedDate = [];

        $scope.firstDayOfWeek = 1; // First day of the week, 0 for Sunday, 1 for Monday, etc.
        $scope.setDirection = function(direction) {
            $scope.direction = direction;
            $scope.dayFormat = direction === "vertical" ? "EEEE, MMMM d" : "d";
        };

        $scope.prevMonth = function(data) {
            $scope.msg = "You clicked (prev) month " + data.month + ", " + data.year;
        };

        $scope.nextMonth = function(data) {
            $scope.msg = "You clicked (next) month " + data.month + ", " + data.year;
        };

        $scope.tooltips = true;



        //custom settings
        $scope.dayClick = function(date) {

            var eventTemplate = '<div class="calendar-day-event">Some sports event</div>';

            $scope.createEvent(date, eventTemplate)

        };

        $scope.setDayContent = function(date, content) {

            // You would inject any HTML you wanted for that particular date here.

            return content;

        };

        $scope.deleteEvent = function ( date ) {

            $scope.createEvent(date, ' ');

        };

        $scope.createEvent = function( date, eventTemplate ) {

            MaterialCalendarData.setDayContent(date, eventTemplate);

        };

    }]);

