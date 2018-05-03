window.every = function (array, callback) {
	var result;
	for (var i = 0;i < array.length; i++) {
		if (callback(array[i],i,array)){
			result = true;
		} else {
			result = false;
			break;
		}
	}
	return result;
};
window.some = function (array, callback) {
	var result;
	for (var i = 0;i < array.length; i++) {
		if (callback(array[i],i,array)){
			result = true;
			break;
		} else {
			result = false;
		}
	}
	return result;
};
window.forEach = function (array, callback) {
	var result = '';
	for (var i = 0;i < array.length; i++) {
		callback((array[i]),i,array)
	}
};
window.filter = function (array, callback) {
	var result = [];
	for(var i = 0;i <array.length; i++){
		if(callback(array[i],i,array)){
			result.push(array[i]);
		}else{continue;}
	}
	return result
};
window.map = function (array, callback) {
	var result = [];
    for(var i = 0; i < array.length;i++){
    	result.push(callback(array[i],i,array))
    }return result
};
