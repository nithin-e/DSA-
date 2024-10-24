
function heapDown(arr,n,i) {
  let largest=i
  let lefChild=2*i+1
  let rightChild=2*i+2
  if (lefChild<n&&arr[lefChild]>arr[largest]) {
    largest=lefChild
  }

  if (rightChild<n&&arr[rightChild]>arr[largest]) {
    largest=rightChild
  }

  if (largest!=i) {
    [arr[i],arr[largest]]=[arr[largest],arr[i]]
    heapDown(arr,n,largest)
  }

}

function heapSort(arr) {
  let n=arr.length
  
  for (let i = Math.floor(n/2)-1; i >=0; i--) {
    heapDown(arr,n,i)
  }

  for (let i = n-1; i > 0; i--) {
    [arr[0],arr[i]]=[arr[i],arr[0]]
    heapDown(arr,i,0)
  }

return arr

}

console.log(heapSort([9,3,7,10,2,44,15]));


