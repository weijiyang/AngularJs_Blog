var app=angular.module("myapp",["routeJs"]);
app.controller("mainctrl",function($rootScope,$scope,$routeParams){
	$rootScope.isLogin= false;
	$rootScope.showFansList = false;
	$scope.fansListTitle = "我的粉丝";
	$rootScope.administrator = noSignIn;
	$rootScope.user = noSignIn;
	$rootScope.caozuo=false;
	$rootScope.checked=false;
	var check=false;
	$scope.toggle=function(){
		$scope.caozuo=!$scope.caozuo;
	};
	$scope.changeFansList = function( type ){
		if(type == "zan"){
			$scope.fansListTitle = "我的赞";
		}
		else{
			$scope.fansListTitle = "我的粉丝";
		}
		$scope.showFansList = !$scope.showFansList;
	}
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
		$rootScope.administrator = userList[3];
		$rootScope.user = userList[3];
		$rootScope.isLogin = true;
		for(var i =0 ; i<userList.length ; i++){
			if(userList[i].fans.length>0 && userList[i].id == $rootScope.administrator.id){
				$rootScope.fans = userList[i].fans;
			}
		}
	}

	

});

