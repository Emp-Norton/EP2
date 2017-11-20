var flatMatch = function(player1, player2){

	var threshhold = 75;
	var matchHits = 0; 

	for (var key in player1){
		if (typeof player1[key] == "object"){
			dynamicMatch(player1[key], player2[key])
		} else {
			staticMatch(player1[key], player2[key])
		}
	}

}



var staticMatch = function(p1prop, p2prop){
	if (p1prop == p2prop) return true 
	return false 
}

var dynamicMatch = function(p1obj, p2obj){
	var maxLength = Math.max.apply(null, [p1obj.length, p2obj.length]);
	var overlapRatio;
	var matchedElements = [];
	var isArray = p1obj.constructor.toString().split(" ").includes("Array()");
	if (isArray){
		for (var idx = 0; idx < maxLength; idx++){
			if (p2obj.includes(p1obj[idx])){
				matchedElements.push(p1obj[idx])
			}
		}
	}
	return matchedElements.length / maxLength
}