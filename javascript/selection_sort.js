function selectionSort(arr) {
//  return  arr.sort((a , b) => a - b)
  const sortedArray= []
  let copy = [...arr]
  // [1 , 10 ,12 ,4, 6, 3]
  for (let i = 1 ; i < arr.length ; i++) {
    let min = Math.min(...copy)
    sortedArray.push(min)
    copy = copy.filter(value => value !== min)
  }
   

  return sortedArray
}
  
  


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([1 , 10 ,12 ,4, 6, 3]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }

}

module.exports = selectionSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
// iterate over the entire array of values
// if the current value is less than the previous value , then push the current to a new array
// if the current value is greater than the previous value , then push the previous value to the array
