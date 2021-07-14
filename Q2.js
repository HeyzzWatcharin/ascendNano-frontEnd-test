function arraypair(arr, expectSum) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === expectSum)
        console.log(
          "Expect Result is: ",
          expectSum,
          "This Solutions is: " + arr[i] + " + " + arr[j]
        );
    }
  }
}
const arr = [2, 4, 3, 5, 6, -2, 4, 7, 8, 9, 10, 11, -8, 15];
const expectSum = 7;
arraypair(arr, 7);
