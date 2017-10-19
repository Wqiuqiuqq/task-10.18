app.factory("shoppingServer",["ajaxServer",function(ajaxServer){
	return {
		getData:function(type,url){
			return ajaxServer.ajax(type,url);
		}
	}
}])