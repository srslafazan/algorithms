// Implement a function void reverse(char* str) in C or C++ which reverses a null- terminated string.

// TODO: what is a null-terminated string?

var s = "asdfasdf";

function reverse(str){
	var rev = "";
	for ( var i = str.length - 1 ; i >= 0; i-- ){
		rev += str[i];
	}
	console.log(rev); return rev;
}

reverse(s);