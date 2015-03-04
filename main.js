function compose() {
	var resArr = [].slice.call(arguments);
	
	return function() {
		for(var i = 0; i < resArr.length; i++) {
			resArr[i]();
		}
	};
}