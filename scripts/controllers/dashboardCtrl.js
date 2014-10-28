angular.module('dashbaord-controllers', [])
.controller('dashboardCtrl', ['$scope', '$filter', function ($scope, $filter) {
    $scope.headerColumns = ["ID", "TimeStamp", "Day", "CreatedOn"];
    $scope.headers = ["ID"];
    $scope.tableData = [{ "ID": 1, "TimeStamp": "10:20 AM", "Day": 1, "CreatedOn": "10/10/2014" },
        { "ID": 2, "TimeStamp": "10:30 AM", "Day": 2, "CreatedOn": "10/11/2014" },
        { "ID": 3, "TimeStamp": "10:40 AM", "Day": 3, "CreatedOn": "10/12/2014" },
        { "ID": 4, "TimeStamp": "10:50 AM", "Day": 4, "CreatedOn": "10/13/2014" },
        { "ID": 5, "TimeStamp": "11:10 AM", "Day": 5, "CreatedOn": "10/14/2014" },
        { "ID": 6, "TimeStamp": "11:20 AM", "Day": 6, "CreatedOn": "10/15/2014" },
        { "ID": 7, "TimeStamp": "11:30 AM", "Day": 7, "CreatedOn": "10/16/2014" },
        { "ID": 8, "TimeStamp": "11:40 AM", "Day": 8, "CreatedOn": "10/17/2014" },
        { "ID": 9, "TimeStamp": "11:50 AM", "Day": 9, "CreatedOn": "10/18/2014" },
        { "ID": 10, "TimeStamp": "12:10 PM", "Day": 10, "CreatedOn": "10/19/2014" },
        { "ID": 11, "TimeStamp": "12:20 PM", "Day": 11, "CreatedOn": "10/20/2014" },
        { "ID": 12, "TimeStamp": "12:30 PM", "Day": 12, "CreatedOn": "10/22/2014" },
        { "ID": 13, "TimeStamp": "12:40 PM", "Day": 13, "CreatedOn": "10/23/2014" },
        { "ID": 14, "TimeStamp": "12:50 PM", "Day": 14, "CreatedOn": "10/24/2014" },
        { "ID": 15, "TimeStamp": "1:00 PM", "Day": 15, "CreatedOn": "10/25/2014" }];

}]);
