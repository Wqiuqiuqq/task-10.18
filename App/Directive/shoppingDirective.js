app.directive("shopping",function(){
	return {
		restrict:"EACM",
		scope:{
			data:"=data",
			index:"@index"
		},
		templateUrl:"App/View/temp/_shopping.html",
		controller:"shoppingItemController",
		link:function(scope,ele,attr,controller){
			
		}
	}
})































