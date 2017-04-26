angular.
  module('app').
  component('accountMsg', {
    template:
        '<ul>' +
          '<li ng-repeat="msg in $ctrl.accountMessages">' +
            '<p>{{msg.text}}</p>' +
          '</li>' +
        '</ul>',
    controller: function AccountMsgController() {
      this.accountMessages = /*[
        {
          text: 'Open a chequing account'
          
        }, {
           text: 'Open a savings account'
        }, {
           text: 'Open a U.S. Dollar account'
        }
      ]*/
       $http.get('/data.json')
            .success(function(data) {
                $scope.accountMessages = data;
            };
    console.log(this.accountMessages);
    }
  });