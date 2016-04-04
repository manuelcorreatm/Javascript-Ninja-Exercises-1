function copyProp(objA, objB, properties) {
	if (properties === undefined){
		for (property in objB){
			objA[property] = objB[property];
		}
	} else {
		for (var i = 0; i < properties.length; i++) {
			objA[properties[i]] = objB[properties[i]]
		}
	}
}

var objA = {};
var objB = {
	p1 : "value1",
	p2 : "value2",
	p3 : "value3"
}

copyProp(objA, objB);
//copyProp(objA, objB, ["p1", "p2"]);
console.log(objA);