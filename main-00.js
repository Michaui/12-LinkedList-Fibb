

// function fibonacciSequence(upTo) {
//   let fibs = [0, 1]; // Initialisieren der ersten beiden Fibonacci-Zahlen
  
//   for (let i = 2; i <= upTo; i++) {
//     fibs[i] = fibs[i - 1] + fibs[i - 2]; // Berechnen der nächsten Fibonacci-Zahl
//   }

//   for (let i = 0; i <= upTo; i++) {
//     console.log(`Fibonacci(${i}) = ${fibs[i]}`);
//   }
// }

// // Beispielaufruf
// fibonacciSequence(10);



//FIB MIT ZWEI PARAMETERN
// let i = 0; 

// function fiboRec(first,second){

//   if (first == 0 || second == 0){
//     console.log(`Fib.: ${first}${second}`)
//   }

//   if (i<=10){
//     i++; 
//     let sum = first + second; 
//     console.log(sum); 
//     first = second; 
//     second = sum;
//      return fiboRec(first, sum);
//   }
// }

// fiboRec(0,1); 



// function merge(left, right) {
//   let sortedArr = [] 
//   while (left.length && right.length) {
    
//     if (left[0] < right[0]) {
//       sortedArr.push(left.shift())
//     } else {
//       sortedArr.push(right.shift())
//     }
//   }
//   return [...sortedArr, ...left, ...right]
// }

// // console.log(merge([3, 12], [8, 10, 11]));  

// function mergeSort(arr) {
//   // Base case
//   if (arr.length <= 1) return arr
//   let mid = Math.floor(arr.length / 2)
//   // Recursive calls
//   let left = mergeSort(arr.slice(0, mid))
//   let right = mergeSort(arr.slice(mid))
//   return merge(left, right);
// }

// console.log(mergeSort([3, 5, 8, 5, 99, 1])) 