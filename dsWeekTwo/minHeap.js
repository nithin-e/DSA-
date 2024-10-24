
class minHeap {
    constructor() {
      this.Heap=[]
    }
  
    insertion(data){
    this.Heap.push(data)
    this.heapyfy()
    }
  
    getparantIndex(index){
  return Math.floor((index-1)/2)
    }
  
    swap(i,j){
      [this.Heap[i],this.Heap[j]]=[this.Heap[j],this.Heap[i]]
    }
  
    heapyfy(){
  let index=this.Heap.length-1
  let parentIndex=this.getparantIndex(index)
  
  while (index>0&&this.Heap[parentIndex]>this.Heap[index]) {
    this.swap(index,parentIndex)
    index=parentIndex
    parentIndex=this.getparantIndex(index)
    
  }
  
    }
  
    lefChildIndex(index){
  return 2*index+1
    }
  
    rightChildIndex(index){
    return 2*index+2
    }
  
  
    heapDown(currentIndex){
  let heapLength=this.Heap.length-1
  let lefChild=this.lefChildIndex(currentIndex)
  
  while (lefChild<heapLength) {
    let rightChild = this.rightChildIndex(currentIndex)
    let swapIndex
    if (lefChild<rightChild&&this.Heap[lefChild]<this.Heap[rightChild]) {
      swapIndex=lefChild 
    }else{
      swapIndex=rightChild
    }
  
  
    if (this.Heap[swapIndex]<this.Heap[currentIndex]) {
      [this.Heap[swapIndex],this.Heap[currentIndex]]=[this.Heap[currentIndex],this.Heap[swapIndex]]
  
      currentIndex=swapIndex
      lefChild=this.lefChildIndex(currentIndex)
    }else{
      return
    }
  }
  
    }
  
    remove(){
      this.Heap[0]=this.Heap.pop()
      this.heapDown(0)
    }
  
    display(){
      console.log(this.Heap);
      
    }
  
  
  }
  
  const practice=new minHeap()
  practice.insertion(400)
  practice.insertion(20)
  practice.insertion(150)
  practice.insertion(70)
  practice.insertion(80)
  practice.insertion(30)
  practice.insertion(200)
  practice.insertion(50)
  
  practice.remove()
  practice.display()