export const mod01 = {
  template: require('./app.html'),
  //controller(myService) {
    controller($scope,appService) {

      $scope.setLanguage = function(lang) {
       if(lang==='EN')
       {
         appService.getAllButtons("/mod01/data.json", function (res) {
          $scope.buttons = res.data;
          $scope.count=res.data.length;
          $scope.h3="Book An Appointment";
          $scope.p="Our Investing Topics";
          $scope.h4="Pick a topic, then we will find a time and place";
          $scope.an="Return to previous screen";
          $scope.chooselang="Select Language";
        }, function (error) {
          $scope.error = error.data;
        });
       }
       else
       {
        appService.getAllButtons("/mod01/data-fr.json", function (res) {
          $scope.buttons = res.data;
          $scope.count=res.data.length;
        }, function (error) {
          $scope.error = error.data;
        });
        $scope.h3="Prenez rendez-vous";
        $scope.p="Nos sujets d'investissement";
        $scope.h4="Choisissez un sujet, puis nous trouverons un moment et un lieu.";
        $scope.an="Retour à l'écran précédent";
        $scope.chooselang="Choisir la langue";
      }
    }
    $scope.setLanguage('EN');
    $scope.optionValue
    $scope.setRequired = function() {
      if($scope.optionValue==='EN') {
        $scope.setLanguage('EN');

      }
      else if($scope.optionValue==='FR'){
        $scope.setLanguage('FR');
      }
      
    }
     $scope.back = function () {
      history.back();
    }
  }
};