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
app.filter('updateTime',function(){
	return function(date){

		var now = new Date();
		var now_arr = [];
		console.log(now.getYear())
		now_arr.push(now.getYear());
		now_arr.push(now.getMonth())
		now_arr.push(now.getDate())
		now_arr.push(now.getHours())
		now_arr.push(now.getMinutes())
		now_arr.push(now.getSeconds())
		
		var date_arr = [];
		date_arr.push(date.getYear());
		date_arr.push(date.getMonth())
		date_arr.push(date.getDate())
		date_arr.push(date.getHours())
		date_arr.push(date.getMinutes())
		date_arr.push(date.getSeconds())
		for(var i =0 ; i<now_arr.length ; i++){
			// console.log(now_arr[i])
			// if(now_arr[i].toString() == date_arr[i].toString()) continue;
			// debugger
			// num = parseInt(now_arr[i])-parseInt(date_arr[i])
			// return num
			// switch (i){
			// 	case 0 : return num + " year";break;
			// 	case 1 : return num + " month";break;
			// 	case 2 : return num + " day";break;
			// 	case 3 : return num + " hours";break;
			// 	case 4 : return num + " minutes";break;
			// 	default : return num + " seconds";
			// }		
		}
	}
})
