//make 2 functions that receive a list of integers as input and return the largest and lowest number in that list, respectively. 
//Each function returns 1 number.
//There will not be any empty arrays/vectors. 

var min = function(list){
   list.sort((a, b) => a -b);
   return list[0];
}

var max = function(list){
   list.sort((a, b) => b - a);
   return list[0];
}

