// Given two strings, write a method to decide if one is a permutation of the other.

var str1 = "I am a permutation";
var str2 = "I am";
var str3 = "1234 not";

function aIsPermutationOfB(a, b){

	// check for permutations
	console.log(a.indexOf(b));
	
	if(b.indexOf(a) >= 0) {
		console.log(true);
		return true // if match found
	}
	console.log(false);
	return false; // if no match found
}

aIsPermutationOfB(str1, str2);	// -> false 
aIsPermutationOfB(str1, str3);	// -> false
aIsPermutationOfB(str2, str1);	// -> true