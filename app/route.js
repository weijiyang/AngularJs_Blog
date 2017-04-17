// Ìí¼Ó·þÎñ
angular.module('routeJs',['ngRoute'])
	.config(['$routeProvider',function($routeProvider){
		$routeProvider
		 .when('/',{
		 	templateUrl:'view/index.html',
			controller:'mainctrl'})
		  .when('/index:id',{
		 	templateUrl:'view/index.html',
			controller:'mainctrl'})
		 .when('/latestnews',{
			templateUrl:'view/latestnews.html',
			controller:'latestnewsController'
				})
         .when('/introduction',{
         	templateUrl:'view/introduction.html',
            controller:'introductionController'})
         .when('/news',{
         	templateUrl:'view/news.html',
            controller:'newsController'})
          .otherwise({redirectTo:'/'});
	}]);

