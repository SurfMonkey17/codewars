//write a function findNeedle() that takes an array full of junk but containing one "needle"
//function should find needle and return message as string that says "found the needle at position " plus the index. 

function findNeedle(haystack) {
    return `found the needle at position ${haystack.indexOf("needle")}`;
}
