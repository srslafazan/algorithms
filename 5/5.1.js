// You are given two 32-bit numbers, N and M, and two bit positions, i and j. Write
// a method to insert M into N such that M starts at bit j and ends at bit i.
// You can assume that the bits j through i have enough space to fit all ofM. That is, if 
// M = 10011, you can assume that there are at least 5 bits between j and i. You would not, 
// for example, have j-3 and i=2, because M could not fully fit between bit 3 and bit 2.

function updateBits(n, m, i, j){
    
    var res;
    var mask;
    
    mask = m << i;
    
    console.log(n, n.toString(2));
    console.log(m, m.toString(2));
    console.log(mask, mask.toString(2));
    
    res = n | mask;
    
    return res.toString(2);
}

updateBits(512, 13, 2, 6);