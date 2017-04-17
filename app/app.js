// ����ļ�
var app=angular.module("myapp",["routeJs"]);
app.controller("mainctrl",function($scope,$routeParams){
	//数据导入
	if($routeParams.id){
		$scope.administrator=userList[$routeParams.id-1];
	}
	else{
		$scope.administrator=userList[0];
	}
	
	$scope.user=userList;
	$scope.caozuo=false;
	$scope.checked=false;
	var check=false;
	$scope.toggle=function(){
		$scope.caozuo=!$scope.caozuo;
	};
	//添加和取消关注
	$scope.funsUp=function(){
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


	

});

