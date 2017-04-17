app.controller('indexController',function(){

});
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
					console.log("diaoyong");
				
					var newItem=document.createElement("div");
					newItem.innerHTML="<div class='m-l-lg'><a class='pull-left thumb-sm avatar'><img src='"+src+"' alt='...''></a><div class='m-l-xxl panel b-a'><div class='panel-heading pos-rlt'><span class='arrow left pull-up'></span><span class='text-muted m-l-sm pull-right'>10m ago</span><a href=''>"+name+"</a>"+data+"</div></div></div>";
				 	document.getElementById("commentText").append(newItem);
					console.log(data);
					$scope.commentshow=false;
		    	 }
		
		document.getElementById("dataText").value="";
		}
		

	
});
app.controller('introductionController',function(){

});
app.controller('newsController',function(){

});
