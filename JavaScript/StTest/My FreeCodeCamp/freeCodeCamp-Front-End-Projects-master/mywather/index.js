
var app=angular.module('myWeather',[]);

//自定义WeatherAPI服务
app.factory('WeatherAPI',function ($http) {
    var obj={};
    obj.getIP=function () {
        return $http.jsonp("http://ipinfo.io/json?callback=JSON_CALLBACK");
    };
    obj.getCurrent=function (ip) {
        var api = "http://v.juhe.cn/weather/ip?format=1";
        var APPKey = "&key=69dba2816a9704b0af86da896bf8c592&ip=";
        var cb = "&callback=JSON_CALLBACK";
        return $http.jsonp(api+APPKey+ip+cb);
    };
    return obj;
})

//控制器
app.controller('myCtrl',function ($scope,WeatherAPI) {
    $scope.Data={};
    WeatherAPI.getIP().success(function (data) {
        var ip=data.ip;
        WeatherAPI.getCurrent(ip).success(function (data) {
            $scope.Data=data.result;
            $scope.items=data.result.future;
        });
    });
})