angular.module('SchedulerApp', [])
  .controller('SchedulerController', ['$scope', function ($scope) {
    $scope.users = [
      {id: 1, name: 'A'},
      {id: 2, name: 'B'},
      {id: 3, name: 'C'}
    ];
    $scope.plans = [
      {id: 1, name: '1/1'},
      {id: 2, name: '2/3'}
    ];
    $scope.answers = [
      {userId: 1, planId: 1, ok: 2},
      {userId: 1, planId: 2, ok: 1},
      {userId: 2, planId: 1, ok: 1},
      {userId: 2, planId: 2, ok: 0},
      {userId: 3, planId: 1, ok: 0},
      {userId: 3, planId: 2, ok: 2}
    ];

    $scope.userName = function (answer) {
      return $scope.users.filter(function (u) {
        return u.id === answer.userId;
      })[0].name;
    };

    $scope.addUser = function () {
      var newUserId =
        Math.max.apply(null, $scope.users.map(function (u) {return u.id;})) +
        1;
      $scope.users.push({
        id: newUserId,
        name: $scope.newUserName
      });
      $scope.plans.forEach(function (p) {
        $scope.answers.push({userId: newUserId, planId: p.id, ok: 0});
      });
      $scope.newUserName = '';
    };

    $scope.addPlan = function () {
      var newPlanId =
        Math.max.apply(null, $scope.plans.map(function (p) {return p.id;})) +
        1;
      $scope.plans.push({
        id: newPlanId,
        name: $scope.newPlanName
      });
      $scope.users.forEach(function (u) {
        $scope.answers.push({userId: u.id, planId: newPlanId, ok: 0});
      });
      $scope.newPlanName = '';
    };
  }]);

// vim: expandtab softtabstop=2 shiftwidth=2
