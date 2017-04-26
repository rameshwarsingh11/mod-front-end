export function appDirective($rootScope) {
    return {
    replace:true,
    scope:true,
    templateUrl:"mod01/equalizeheight.html",
    link: function(scope, element, attr) 
    {
        element.find("button").html(attr.text);
        $rootScope.count=attr.count;
            var initHeight = element.find("button")[0].offsetHeight;
            if (angular.isUndefined($rootScope.calcHeight) || initHeight > $rootScope.calcHeight) 
            {
                $rootScope.calcHeight = initHeight;
            }
}}}
  