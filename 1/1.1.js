// Implement an algorithm to determine if a string has all unique characters. What if you cannot use additional data structures?

var s = "1234";
var u = "I am not unique";

function isUnique(str){
	var map = {};
	for( var idx of str ){
		if( map.hasOwnProperty(idx) ){
			console.log(false); return false;
		}
		map[idx] = 1;
	}
	console.log(true); return true;
}

isUnique(s);
isUnique(u);