var words = ["pikachu", "bulbasaur", "squirtle", "charmander", "zzzzzz"];
sort(words, "");
sort(words, "desc");
sort(words, "ascLength");
sort(words, "descLength");
sort(words, "ascCons");
sort(words, "descCons");

function sort(words, option){
	if (option == "desc") {
		words.sort(function(value1, value2){ return value2 > value1; });
	} else if (option == "ascLength") {
		words.sort(function(value1, value2){ return value2.length < value1.length; });
	} else if (option == "descLength") {
		words.sort(function(value1, value2){ return value2.length > value1.length; });
	} else if (option == "ascCons") {
		words.sort(function(value1, value2){ 
			var consonant1 = 0, consonant2 = 0;
			consonantList = "BCDFGHJKLMNPQRSTVWXYZ";
			for (var i = 0; i < value1.length; i++) {
				//console.log(consonantList.indexOf(value1[i].toUpperCase()));
				if (consonantList.indexOf(value1[i].toUpperCase()) >= 0) {
					consonant1++;
				}
			}
			for (i = 0; i < value2.length; i++) {
				if (consonantList.indexOf(value2[i].toUpperCase()) >= 0) {
					consonant2++;
				}
			}
			
			return consonant2 < consonant1; 
		});
	} else if (option == "descCons") {
		words.sort(function(value1, value2){ 
			var consonant1 = 0, consonant2 = 0;
			consonantList = "BCDFGHJKLMNPQRSTVWXYZ";
			for (var i = 0; i < value1.length; i++) {
				if (consonantList.indexOf(value1[i].toUpperCase()) > -1) {
					consonant1++;
				}
			}
			for (i = 0; i < value2.length; i++) {
				if (consonantList.indexOf(value2[i].toUpperCase()) > -1) {
					consonant2++;
				}
			}

			return consonant2 > consonant1; 
		});
	} else {
		words.sort();
	}

	console.log(words);
};