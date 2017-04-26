export function tdButton($rootScope) {
    return {
        replace: true,
        scope: true,
        templateUrl: "mod01/templates/button.html",
        controller: ["$scope", function ($scope) {

        }],
        link: function (scope, element, attr) {
            element.find("a").html(attr.text);
            var height = element.find("p")[0].offsetHeight;
           
            if (angular.isUndefined($rootScope.buttonHeight) || height > $rootScope.buttonHeight) {
                $rootScope.buttonHeight = height;
            }
        }
    }
}