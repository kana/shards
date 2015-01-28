angular.module('SchedulerApp', [])
  .controller('SchedulerController', ['$scope', function ($scope) {
    $scope.people = [
      {name: 'A', plans: [{name: '1/1', answer: 2}, {name: '2/3', answer: 1}]},
      {name: 'B', plans: [{name: '1/1', answer: 1}, {name: '2/3', answer: 0}]},
      {name: 'C', plans: [{name: '1/1', answer: 0}, {name: '2/3', answer: 2}]}
    ];
  }]);

// vim: expandtab softtabstop=2 shiftwidth=2
