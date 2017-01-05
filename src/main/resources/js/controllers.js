app

    .controller('homeCtrl',function($scope){
        $scope.quantity = 1;
        $scope.price = 19.992;
    })
    .controller('leyuanCtrl',function($scope,$http,defaultValue,testFactory,swiper,testService){

        $scope.number = defaultValue;

        $scope.test1 = function(x,y){
            return testFactory.add(x,y);
        }

        $scope.test2 = function(x,y){
            return testService.add(x,y);
        }

        $http.get('/test.json').success(function(res){
            $scope.data = res;
            swiper.init('#id');
        });

    })

    .controller('cardCtrl',function($scope){
        $scope.names = [
            {name:'xm',country:'China'},
            {name:'tc01',country:'American'},

            {name:'tc02',country:'FBmerican'},
            {name:'xm02',country:'YCmerican'},
            {name:'bd02',country:'Dmerican'},
            {name:'qh02',country:'Emerican'}
        ];
    })

    .controller('mimeCtrl', function($scope) {
        $scope.firstName = "John",
            $scope.lastName = "Doe"
        $scope.myVar = false;
        $scope.toggle = function() {
            $scope.myVar = !$scope.myVar;
        };
    });