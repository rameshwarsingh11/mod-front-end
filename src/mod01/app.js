import './mod01.scss';

//angular.module('app').component('mod01', mod01);

export const mod01 = {
	template: require('./app.html'),

	controller($scope,$locale){
	// $scope.newArr = myService.data;
		/*alert('before service call');
		myService.getData().then(function(data){
    $scope.newArr=data;
    alert('In mod01 controller service');
}, function(err){
	alert('In mod01 controller err');
    //Handle error here
});*/
 if ($locale.id == 'en-us') {
 	
var newArr=[
		{ text: "Open a chequing account" },
		{ text: "Open a savings account" },
		{ text: "Open a U.S. Dollar account" },
		{ text: "Review my everyday banking needs" },
		{ text: "Switch to TD" },
		{ text: "Apply for Overdraft Protection" }

		];
	}
	else
	{
		var newArr=[
		{ text: "Vos données de formulaire resteront" },
		{ text: "Mot de passe" },
		{ text: "Soumettre" },
		{ text: "Vos données de formulaire resteront" },
		{ text: "Vos données de formulaire resteront" },
		{ text: "Vos données de formulaire resteront" }

		];
	}
		
//alert('after service call');

		this.data=chunk(newArr, 2);


		function chunk(arr, size) {
			var newArr = [];
			for (var i=0; i<arr.length; i+=size) {
				newArr.push(arr.slice(i, i+size));
			}
			
			return newArr;
		}


//alert('this is the last text');


 /* myService.getData().then(function(data){
    $scope.data=data;
    alert('In mod01 controller service');
}, function(err){
	alert('In mod01 controller err');
    //Handle error here
});
*/
}
};


//angular.module('app', []);
