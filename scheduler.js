angular.module('SchedulerApp', [])
  .controller('SchedulerController', ['$scope', function ($scope) {
    $scope.users = [
      {name: 'A', plans: [{name: '1/1', answer: 2}, {name: '2/3', answer: 1}]},
      {name: 'B', plans: [{name: '1/1', answer: 1}, {name: '2/3', answer: 0}]},
      {name: 'C', plans: [{name: '1/1', answer: 0}, {name: '2/3', answer: 2}]}
    ];

    $scope.addUser = function () {
      $scope.users.push({
        name: $scope.newUserName,
        plans: $scope.users[0].plans
               .map(function (p) {return {name: p.name, answer: 0}})
      });
      $scope.newUserName = '';
    };

    $scope.addPlan = function () {
      $scope.users.forEach(function (u) {
        u.plans.push({name: $scope.newPlanName, answer: 0});
      });
      $scope.newPlanName = '';
    };
  }]);

// vim: expandtab softtabstop=2 shiftwidth=2
