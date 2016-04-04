function count(target){
	var num = 0;
	if (typeof target === "number") {
		num = Math.floor(Math.log10(target)) + 1
	} else if (typeof target === "string") {
		vowelList = "AEIOU";
		for (var i = 0; i < target.length; i++) {
				if (vowelList.indexOf(target[i].toUpperCase()) >= 0) {
					num++;
				}
			}
	}	else {
		console.log("input not valid");
	}
	return num;
}

console.log(count("i512e3u324a"));
