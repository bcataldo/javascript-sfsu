function pigLatin() {

	var newWord = document.getElementById("word").value;
	var orgWord = new Array;
	orgWord = newWord.split("");
	var pigLatin = "ay";
	var pigLatin1 = "way";
	var output;
	var first = orgWord.slice(0, 1);
	var sLast = orgWord.slice(1);

	//set up that if the first character is a vowel, we add way.
	
	if (first == "a" || first == "e" || first == "i" || first == "o" || first == "u") {
		output = newWord + pigLatin1;
		alert(output);
		document.getElementById("piglatin").value = output;
	} 
	//set up if the first character is not a vowel, move it to
	//the end of the word and add ay. Need to put join the
	//array together
	
	else {
		lastJoin = sLast.join("");
		output = lastJoin + first + pigLatin;
		document.getElementById("piglatin").value = output;
alert(output);
	}
}
