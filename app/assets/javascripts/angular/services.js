dummyApp.service('DummyService', ['$http', function ($http) {
  var urlBase = SERVICE_URL+'/api/dummys';
  
  this.index = function () {
    return $http.get(urlBase);
  };

}]);