angular.module('SchedulerApp', [])
  .controller('SchedulerController', ['$scope', function ($scope) {
    $scope.people = [
      {name: 'A', plans: [{name: '1/1', answer: 2}, {name: '2/3', answer: 1}]},
      {name: 'B', plans: [{name: '1/1', answer: 1}, {name: '2/3', answer: 0}]},
      {name: 'C', plans: [{name: '1/1', answer: 0}, {name: '2/3', answer: 2}]}
    ];

    $scope.addPerson = function () {
      $scope.people.push({
        name: $scope.newPersonName,
        plans: $scope.people[0].plans
               .map(function (p) {return {name: p.name, answer: 0}})
      });
      $scope.newPersonName = '';
    };

    $scope.addPlan = function () {
      $scope.people.forEach(function (p) {
        p.plans.push({name: $scope.newPlanName, answer: 0});
      });
      $scope.newPlanName = '';
    };
  }]);

// vim: expandtab softtabstop=2 shiftwidth=2
