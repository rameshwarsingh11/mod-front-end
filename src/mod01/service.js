/*app.factory('dataService', function($rootScope, $http) {
    var dataService = {};

    dataService.data = {};

    //Gets the list of data
    dataService.getData =
*/

/*$http.get('phones/phones.json').success(function(data) {
   $scope.phones = data;
});
*/

    /* function dataService() {
        $http.get('/data.json')
            .success(function(data) {
                $scope.accountInfo = data;
            });

        //return dataService.data;
    }*//*;

    return dataService;
}
*/
export function appService($http) {

    var service = {};

    service.getAllButtons = function (url, success, error) {
        $http.get(url).then(function (res) {
            success(res);
        },function (err) {
            error(err);
        });
    }

    return service;
}


/*

(function (app) {
    'use strict';

    app.factory('myService', MyService);

    MyService.$inject = ['$q', '$http'];

    function MyService($q, $http) {
        var data;

        var service = {
            getData: getData
        };

        return service;

       

        function getData(refresh) {
            if (refresh || !data) {
                return $http.get('data.json').then(function(data){
                    this.data = data;
                    
                    return data;
                })
            }
            else {
                var deferrer = $q.defer();
                deferrer.resolve(data);
                return deferrer.promise;
            }
        }
    }

}(angular.module('app')));*/