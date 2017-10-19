app.controller("shoppingItemController",function($scope){
	$scope.deleteItem=function(index){
		$scope.$emit("deleteItem",index);
	}
})
