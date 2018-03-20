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
		if(!$rootScope.user.id) return false;
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
	$scope.backAdminitrator = function(){
		if($rootScope.administrator)
		$rootScope.user = $rootScope.administrator;
	}

	

});
app.filter('updateTime',function(){
	return function(date){
		var old = new Date(2017,5,1,5,2,1).getTime()
		var now = new Date().getTime()
		var tip = (parseInt(now) - parseInt(old))/1000;
		if(tip >= 31536000){
			return Math.floor(tip/31536000) + " years";
		}
		else if( tip >=2592000 ){
			return Math.floor(tip/2592000) + " months";
		}
		else if( tip >= 86400 ){
			return Math.floor(tip/86400) + " days";
		}
		else if( tip >= 3600 ){
			return Math.floor(tip/3600) + " hours";
		}
		else if( tip >60 ){
			return Math.floor(tip/60) + " minutes";
		}
		else{
			return Math.floor(tip) + " seconds";
		}
	}
})
