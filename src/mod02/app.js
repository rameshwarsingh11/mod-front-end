import './app.scss';

export const mod02 = {
    template: require('./app.html'),
    controller($scope) {

        this.transfer = {
            user: {
                name: 'John Smith',
                photo_url: 'http://i.imgur.com/Y7u78c4.jpg'
            },
            transfer: {
                from: {
                    account_name: 'Checking',
                    account_number: 123456789123,
                    account_balance: 5000
                },
                to: {
                    name: 'Jane Smith',
                    photo_url: 'http://i.imgur.com/CGILUTj.jpg'
                },
                amount: 300
            }
        };

        $scope.alerts = [];

        $scope.addAlert = function() {
            $scope.alerts.push({ type: 'success', msg: 'Well done! You successfully read this important alert message.' });
        };

        $scope.closeAlert = function(index) {
            $scope.alerts.splice(index, 1);
        };

    }
};
