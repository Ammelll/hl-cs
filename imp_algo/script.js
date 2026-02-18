// python -m http.server

let NUM = Math.floor(Math.random() * 100);

let num_guesses = 0;

function sequentialSearch(){
    let temp;
    for(let i = 0; i < 100; i++){
        if(NUM == i){
            temp = i;
            break
        }
    }
  document.getElementById("output_sequential").innerHTML = "The number is " + temp;

}

function binarySearch() {

    let guess = document.getElementById("guess").value;
    num_guesses++

    if(guess > NUM){
        document.getElementById("output_binary").innerHTML = "too high"
    } else if(guess < NUM){
       document.getElementById("output_binary").innerHTML = "too low" 
    }
    else {
        document.getElementById("output_binary").innerHTML = "you got it in " + num_guesses
        if(num_guesses > 6){
            document.getElementById("output_binary").innerHTML += "n00b"
        }
    }
}

//sort test array using Bubble Sort
function bubbleSort(arr) {

document.getElementById("output_bubble").innerHTML = "before Bubble: " + arr
/*  Bubble Sort pseudo code

    for i from 0 to len
      for j from 0 to len - i
        if a[j] > a[j+1]
          swap(a[j],a[j+1])
*/    
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j+1] = temp
            }
        }
    }
document.getElementById("output_bubble").innerHTML += "<br>after Bubble: " + arr

}

//sort test array using selection sort
function selectionSort(arr) {

  document.getElementById("output_selection").innerHTML = "<br>before Selection: " + arr


/*  Selection Sort pseudo code

    for i from 1 to N - 1
      // set current element as minimum
      min = i    
    
      // check the element to be minimum 
      for j from i+1 to N 
        if a[j] < a[min]
          min = j;
    
      //swap the minimum element with the current element
      if min != i
        swap(arr,a[min],a[i])
*/ 
    let min;
    for(let i = 0; i < arr.length; i++){
        min = i;

        for(let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        if(min != i){
            let temp = arr[i]
            arr[i] = arr[min]
            arr[min] = temp
        }
    }
  document.getElementById("output_selection").innerHTML += "<br>after Selection: " + arr

}
  

function testAll() {
  let arr = [-.1,4,7,6,1651,234,5,-18,9,2,3];
  selectionSort(arr);
  bubbleSort(arr);
  recursiveMergeSort(arr)
  let a = []
  for(let i = 0; i < 100; i++){
    a.push(i)
  }
 recursiveBinarySearch(a,0,a.length-1,NUM);
}



//HL Only: recursive binarySearch
function recursiveBinarySearch(arr,low,high,target){
    let mid = arr[low+Math.floor((high-low)/2)];
    if(arr.length <= 1){
        return -1
    }
    if(target > mid){
        low+= Math.floor((high-low)/2)
        recursiveBinarySearch(arr,low,high,target)
    } else if(target < mid){
        high-= Math.floor((high-low)/2)
        recursiveBinarySearch(arr,low,high,target)
    }
    if(target == mid){
        document.getElementById("output_recursive_binary").innerHTML = "The number is " + mid
        return mid;
    }

}

//HL Only: recursive mergeSort()
function recursiveMergeSort(arr){
    if(arr.length <= 1) return arr;
    let mid = Math.floor(arr.length/2) 
    let left = arr.slice(0,mid)
    let right = arr.slice(mid)
    recursiveMergeSort(left)
    recursiveMergeSort(right)
    let sorted = merge(left,right)
    document.getElementById("output_merge").innerHTML = "<br>after Recursive Merge Sort: " + sorted
    return sorted
}
function merge(left, right){
    let res = []
    while(left.length != 0 && right.length != 0){
        if(left[0] <= right[0]){
            res.push(left[0])
            left.shift()
        } else{
            res.push(right[0])
            right.shift()
        }
    }
    res.push(...left)
    res.push(...right)
    return res
}
function quickSort(arr,low,high){
}
/*  

//swap pseudo code
swap(arr,index1,index2)

    temp = index2
    index2 = index1
    index1 = temp

    return arr

*/