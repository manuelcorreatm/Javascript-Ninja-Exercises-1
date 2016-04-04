function styleElem(color = "white", fontSize = "40px", bgcolor = "green"){
	var elem = document.getElementById("elem");
	function styling(color){
		this.style.color = color;
		this.style.fontSize = fontSize;
		this.style.backgroundColor = bgcolor;
	}

	styling.call(elem, color, fontSize, bgcolor);
};

styleElem("red", "30px", "black");