function insertionSort(arr) {
    // Iterate over each element in the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
      let currentElement = arr[i]; // Pick the current element
      let j = i - 1; // Initialize j to the previous element
  
      // While j is greater than or equal to 0 and the previous element is greater than the current element
      while (j >= 0 && arr[j] > currentElement) {
        // Shift the previous element to the right
        arr[j + 1] = arr[j];
        j--;
      }
  
      // Insert the current element into the sorted sequence
      arr[j + 1] = currentElement;
    }
  
    return arr;
  }
  
  // Test the function
  console.log(insertionSort([5, 3, 8, 4, 6]));