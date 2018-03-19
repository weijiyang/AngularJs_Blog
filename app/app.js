var app=angular.module("myapp",["routeJs"]);
app.controller("mainctrl",function($rootScope,$scope,$routeParams){
	$rootScope.isLogin= false;

	$rootScope.administrator = noSignIn;
	$rootScope.caozuo=false;
	$rootScope.checked=false;
	var check=false;
	$scope.toggle=function(){
		$scope.caozuo=!$scope.caozuo;
	};
	//添加和取消关注
	$scope.funsUp=function(){
		if(!$scope.administrator.id) return false;
		if(check==false){
			$scope.administrator.follow++;
	        check=true;
	        $scope.checked=true;
		}
		else{
			check=false;
			$scope.administrator.follow--;
			$scope.checked=false;
		}
	};
	$scope.signIn = function(){
		$scope.administrator = userList[0];
	}

	

});

