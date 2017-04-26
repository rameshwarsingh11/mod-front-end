export function apiService($http) {
    this.get = function (url) {
        return $http.get(url);
    }
}
