//Given random non-negative number, return the digits of this number within an arry in reverse order: 

function digitize(n) {
    const nums =  n.toString().split("").map(Number); 
    const reverseNums = nums.reverse();
    return reverseNums;
}

console.log(digitize(123456789));
