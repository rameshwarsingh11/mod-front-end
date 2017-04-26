/*var myController=app.controller();
myController=fucntion($scope,dataService)
{
	$scope.accountInfo=dataService.data;
}*/

app.controller('AccountMessageController', ['$scope', '$http',
	function($scope,$http) {
     // $scope.title = "mod01";
/*      $scope.data = [];
$http.get('/data.json')
            .success(function(data) {
                $scope.data = data;
                */
    /* $http({
        method: 'GET',
        url: 'http://localhost/src/data.json',       
    }).then( function(response) {
    	$scope.data = response;*/
//       });


myService.getData().then(function(data){
	$scope.data=data;
}, function(err){
    //Handle error here
});

}



]);