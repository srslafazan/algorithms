// Implement a method to perform basic string compression using the counts
// of repeated characters. For example, the string aabcccccaaa would become
// a2blc5a3. If the "compressed" string would not become smaller than the original
// string, your method should return the original string.



var s = "aabcccccaaa";

function compressString(s){
	var r = "";
	// for length of string
	for (var i = 0 ; i < s.length ; i++) {
		r += s[i];
		// if match, check how long
		var match_length = getMatchLength(s, i);
		r += String(match_length);
		// skip to next char set
		i += match_length - 1;
	}
	return r;
}

// -> "a2b1c5a3";

function getMatchLength(s, i){
	var j = i + 1;
	var match_length = 1;
	while ( s[i] == s[j] && j < s.length ){
		match_length++;
		j++;
	}
	return match_length;
}

module.exports = compressString;