app.controller('indexController',["$rootScope","$scope","$routeParams",function($rootScope,$scope , $routeParams){
	console.log($routeParams.id)
	if($routeParams.id){
		$rootScope.showFansList = false;
		//用户粉丝名单替换&用户替换
		for(var i =0 ; i<userList.length ; i++){
			if(userList[i].id == $routeParams.id){
				$rootScope.user = userList[i];
				console.log(userList[i])
				break;
			}
		}
		for(var j = 0;j<userList.length;j++){
					if(userList[j].id == $rootScope.administrator.id){
						for(var k=0;k<userList[j].fans.length;k++){
							if(userList[j].fans[k].id == $routeParams.id){
								$rootScope.checked = userList[j].fans[k].isStar
								break
							}
						}
						break;
					}
				}
	}
	else{
		$rootScope.administrator=noSignIn;
	}
}]);
app.controller('latestnewsController',function($scope){

	$scope.commentshow=false;//记录是否点击div 弹出评论框
	$scope.commentToggle=function(){
			$scope.commentshow=true;		
	}
		

	$scope.putComment=function(){
		var name=$scope.administrator.name;
		var src=$scope.administrator.img;
		var data=document.getElementById("dataText").value;
		if(data!=""){
				var newItem=document.createElement("div");
				newItem.innerHTML="<div class='m-l-lg'><a class='pull-left thumb-sm avatar'><img src='"+src+"' alt='...''></a><div class='m-l-xxl panel b-a'><div class='panel-heading pos-rlt'><span class='arrow left pull-up'></span><span class='text-muted m-l-sm pull-right'>10m ago</span><a href=''>"+name+"</a>"+data+"</div></div></div>";
			 	document.getElementById("commentText").append(newItem);
				$scope.commentshow=false;
	    	 }
		document.getElementById("dataText").value="";
		}
});
app.controller('introductionController',function(){

});
app.controller('newsController',function(){

});
