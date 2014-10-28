angular.module('angulargrid', ['ui.bootstrap'])
.directive('angtable', ['$filter', '$rootScope', function ($filter, $rootScope) {
    return {
        scope: {
            data: "=",
            ec: '@',
            // headers: '=',
            filter: '=',
            enablecrud: '@',
            enablepaging: '@',
            noofrecordperpage: '@'
        },
        restrict: 'EA',
        template: '<div class="row">' +
            '<div class="col-md-4 col-md-offset-4">' +
            '<input ng-show="EnableFilter" ng-keyup="filterOrders($event, $index)" placeholder="Search here.." type="text" class="form-control" />' +
            '</div>' +
              '</div>' +
                    '<div class="table-responsive">' +
                            '<table class="table table-bordered table-hover table-striped">' +
                                '<thead>' +
                                    '<tr>' +
                                        '<th ng-repeat="header in Headers">' +
                                            '{{header}}' +
                                            '<i>' +
                                                '<a class="glyphicon glyphicon-sort-by-alphabet" href="javascript://" ng-click="order(header.key,$event)"></a>' +
                                            '</i>' +
                                        '</th>' +
                                    '</tr>' +
                                '</thead>' +
                                '<tbody>' +
                                    '<tr ng-click="_rowClick(data[$index])" ng-repeat="objData in Times">' +
                                        '<td ng-repeat="obje in objData.obj track by $index">{{obje.val | asDate}}</td>' +
                                        '<td ng-show="EnableCrud">Edit</td>' +
                                        '<td ng-show="EnableCrud">Update</td>' +
                                        '<td ng-show="EnableCrud">Delete</td>' +
                                    '</tr>' +
                                '</tbody>' +
                            '</table>' +

                            '<pagination ng-show="EnablePaging" boundary-links="true" items-per-page="numPerPage" total-items="AllTimeStamps.length" ng-model="currentPage" class="pagination-sm"  previous-text="Prev" next-text="Next" first-text="First" last-text="Last"></pagination>' +
                        '</div>',
        link: function ($scope, element, $attr) {

            $scope._rowClick = function (object) {
                $rootScope.$broadcast('_rowClick', { data: object })
            }

            var orderBy = $filter('orderBy');

            $scope.reverse = false;

            $scope.order = function (predicate, $event) {
                $scope.reverse = !$scope.reverse;
                $scope.AllTimeStamps = orderBy($scope.AllTimeStamps, predicate, $scope.reverse);
                $scope.FilterPaging();

                var element = angular.element($event.target);
                if (element.hasClass("glyphicon-sort-by-alphabet")) {
                    element.removeClass("glyphicon-sort-by-alphabet");
                    element.addClass("glyphicon-sort-by-alphabet-alt");
                }
                else {
                    element.removeClass("glyphicon-sort-by-alphabet-alt");
                    element.addClass("glyphicon-sort-by-alphabet");
                }
            };

            $scope.Headers = [];

            $scope.Times = [];

            $scope.AllTimeStamps = [];

            $scope.Pagination = [];

            $scope.currentPage = 1;

            // to display number of records on per page.
            $scope.numPerPage = $scope.$eval($attr.noofrecordperpage);

            //if ($attr.ec == undefined) {
            //    $scope.ec = [];
            //}
            //else {
            //    $scope.ec = $scope.$eval($attr.ec);
            //}

            //$scope.autoHeader = true;

            //if ($scope.headers !== undefined) {
            //    $scope.autoHeader = false;
            //}

            $scope.FilterPaging = function () {

                var a = $scope.numPerPage;

                var begin = (($scope.currentPage - 1) * $scope.numPerPage)
               , end = begin + $scope.numPerPage;

                $scope.Times = $scope.AllTimeStamps.slice(begin, end);

            }

            $scope.$watch("currentPage", function (event, data) {
                $scope.FilterPaging();
            });


            // to enable and disable filter textbox
            $scope.EnableFilter = true;
            if ($scope.filter !== undefined && $scope.filter === false) {
                $scope.EnableFilter = false;
            }


            // To enable And disable paging
            $scope.EnablePaging = true;
            if ($scope.$eval($attr.enablepaging) !== undefined && $scope.$eval($attr.enablepaging) === false) {
                $scope.EnablePaging = false;
            }

            // to enable and disbale crud button(edit/update/delete)
            $scope.EnableCrud = true;
            if ($scope.$eval($attr.enablecrud) !== undefined && $scope.$eval($attr.enablecrud) === false) {
                $scope.EnableCrud = false;
            }

            $scope.filterOrders = function ($event, index) {
                var input = angular.element($event.target);
                console.log(input);
                var search = input.val();
                console.log(search);
                if (search != "") {
                    var result = [];
                    var result = $filter('filter')($scope.Pagination, search);
                    $scope.Times = result;
                    $scope.AllTimeStamps = result;
                    $scope.FilterPaging();
                }
                else {
                    $scope.Times = $scope.Pagination;
                    $scope.AllTimeStamps = $scope.Pagination;
                    $scope.FilterPaging();
                }
            }

            $scope.Headers = [];

            $scope.AllTimeStamps = [];//$scope.data;

            $scope.$watch('data', function () {
                var ecolumns = $scope.$eval($attr.ec);
                if (ecolumns == undefined) {
                    ecolumns = [];
                }

                if ($scope.data.length > 0) {
                    Object.getOwnPropertyNames($scope.data[0]).forEach(function (val, idx, array) {
                        if (ecolumns.length > 0) {
                            if (ecolumns.indexOf(val) >= 0) {
                                $scope.Headers.push(val);
                            }
                        }
                        else {
                            $scope.Headers.push(val);
                        }
                    });

                    $scope.DataToRender = [];

                    angular.forEach($scope.data, function (item) {
                        var values = [];

                        Object.getOwnPropertyNames(item).forEach(function (val, idx, array) {
                            if (ecolumns.length > 0) {
                                if (ecolumns.indexOf(val) >= 0) {
                                    values.push({ key: val, val: item[val] });
                                }
                            }
                            else {
                                values.push({ key: val, val: item[val] });
                            }
                        });

                        if (values.length > 0) {
                            $scope.AllTimeStamps.push({ obj: values });
                        };
                    });


                    $scope.Times = $scope.AllTimeStamps;
                    $scope.Pagination = $scope.AllTimeStamps;
                    $scope.FilterPaging();
                }

            })


        }

    }
}]).filter("asDate", function ($filter) {
    return function (input) {
        try {
            var pattern = /^\/Date\((\d*)\)\/$/;
            if (input.match(pattern)) {
                var data = input;
                data = $filter('date')(data, 'MM/dd/yyyy');
                if (data == NaN || data == undefined || data == null) {
                    return input;
                }

                return data;
            }
            return input;

        }
        catch (e) {
            return input;
        }
    }
});