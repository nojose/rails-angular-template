// Dummy Controller
dummyApp.controller('DummyController', function ($scope, $q, DummyService) {
  
  this.displayPath = ASSETS_PATH+'dummys/index.html'
  this.messages = [];

  this.init = function() {
    this.messages.push("Hello World");
  }

  this.getDummyMessages = function() {
  	
  	var promises = {
      dummyMessages: DummyService.index()
    }
    var parent = this;
    $q.all(promises)
      .then(function (q) {
        parent.messages = q.dummyMessages.data.messages;
      });
  }

  this.init();
});