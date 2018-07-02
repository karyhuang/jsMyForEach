// create a myForEach function which takes two parameters
// first parameter takes an array, second parameter takes a function

var colors = ["red", "blue", "gray"];


function myForEach(arr, func) {
  // loop through the array
  for(var i = 0; i < arr.length; i++) {
    // call func for each item in the array
    func();
  }
}
// pass the colors array to myForEach and for each item, call the alert function
myForEach(colors, alert);
// this creates 3 empty alerts because 3 items in the colors array


function myForEach2(arr, func) {
  for(var i = 0; i < arr.length; i++) {
    // call func for each item in the array and pass the current index as parameter
    func(arr[i]);
  }
}
myForEach2(colors, alert);
// this creates 3 alerts each containing one item in the colors array


// most of the time, we pass an anonymous function as the second parameter
myForEach(colors, function(){
  alert("HI");
});
// this creates 3 "HI" alerts 

// anonymous function with parameters
myForEach2(colors, function(color){
  console.log(color);
  // for each item in colors, the anonymous function is called with the item as parameter
  // this logs 3 colors into the console
});



// to use myForEach2 like forEach (call with '.'), add to the array prototype
var friends = ['Amy', 'Bob', 'Charlie', 'Dave'];

Array.prototype.myForEach2 = function(func) {
  // use this keyword to refer to the array who calls this function
  for (var i = 0; i < this.length; i++) {
    func(this[i]);
  }
}

friends.myForEach2(function(name){
  console.log("I love " + name);
});
