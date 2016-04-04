function fn() {
	console.log("test");
};


function limitFunc(fn, num) {
	return function () {
		fn.times = fn.times || 0;
		if (fn.times < num) {
			fn.times++;
			fn();
		} else {
			console.log("Enough!");
		}
	};
};

var limited = limitFunc(fn, 4);
limited();
limited();
limited();
limited();
limited();
limited();
