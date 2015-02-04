angular.module('SchedulerApp', ['ngRoute'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/events', {
        controller: 'EventListController',
        templateUrl: 'event-list.html'
      })
      .when('/events/:eventId', {
        controller: 'EventDetailController',
        templateUrl: 'event-detail.html'
      })
      .otherwise({
        redirectTo: '/events'
      });
  })
  .value('events', [
    {id: 1, title: 'Vim workshop', createdAt: '2015-02-03T23:12:38'},
    {id: 2, title: 'Emacs workshop', createdAt: '2015-02-03T23:12:51'},
    {id: 3, title: 'Workshop workshop', createdAt: '2015-02-03T23:12:57'}
  ])
  .controller('EventListController', function ($scope, events) {
    // TODO: Load events.
    $scope.events = events;
  })
  .controller('EventDetailController', function ($scope, $routeParams) {
    // TODO: Load full contents of the event.
    $scope.event = {id: $routeParams.eventId};
  })
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

    $scope.movePlan = function (plan, direction) {
      var i = $scope.plans.indexOf(plan);
      $scope.plans.splice(i, 1);
      $scope.plans.splice(i + direction, 0, plan);
    };
  }]);

// vim: expandtab softtabstop=2 shiftwidth=2
