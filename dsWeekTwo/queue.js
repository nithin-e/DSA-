
// class Queue{
//   constructor(){
// this.items=[]
// }

// enQueue(element){
// this.items.push(element)
// }

// deQueue(){
//   return   this.items.shift()
// }

// peek(){
//    return this.items[0]
// }

// isEmpty(){
//   return  this.items.length==0
// }

// size(){
//     return this.items.length
// }

// print(){
//     console.log(this.items.toString())
    
// }

// }


// const practiceQueue=new Queue()

// practiceQueue.enQueue(10)
// practiceQueue.enQueue(20)
// practiceQueue.enQueue(30)
// practiceQueue.enQueue(40)

// practiceQueue.deQueue()


// practiceQueue.print()
// console.log(practiceQueue.size())

// console.log(
//     practiceQueue.isEmpty() )

//     console.log(practiceQueue.peek());
    



//queImplementation using object

// class Queue {
//     constructor() {
//         this.items={}
//         this.frond=0
//         this.rear=0
//     }

//     enQueue(element){
//      this.items[this.rear]=element
//      this.rear++
//     }

//     deQueue(){
//         const removeItem=this.items[this.frond]
//         delete this.items[this.frond]
//         this.frond++
//         return removeItem
//     }

//     peek(){
//        let  firstelement= this.items[this.frond]
//          return firstelement
//     }

//     isEmpty(){
//        return  this.frond==this.rear
//     }

//     size(){
//         return this.rear-this.frond
//     }

//     print(){
//         console.log(this.items);
        
//     }
// }

// const practiceQueue=new Queue()

// practiceQueue.enQueue(10)
// practiceQueue.enQueue(20)
// practiceQueue.enQueue(30)
// practiceQueue.enQueue(40)

// practiceQueue.print()
// console.log(practiceQueue.deQueue())

// practiceQueue.print()

// console.log(practiceQueue.peek());

// console.log(practiceQueue.isEmpty())

// console.log(practiceQueue.size());



// class Queue {
//     constructor(data) {
//         this.data=data
//         this.next=null
//     }
// }

// class linkesList {
//     constructor() {
//       this.head=null
//       this.tail=null
//     }


//     enqueue(data){

//         let NewNode=new Queue(data) 
//     if (this.head==null) {
    
//         this.head=NewNode
//         this.tail=NewNode
//     }else{
//         this.tail.next=NewNode
//         this.tail=NewNode
//     }
//     }


//     dequeue(){
//        let current= this.head
//        this.head=current.next
//        return current.data
//     }

//     peek(){
//         let current=this.head
//         return current.data
//     }


//     size(){
//         let cound=0
//         let current=this.head
//         while (current!==null) {
//             cound++
//             current=current.next
//         }

//         return cound
//     }


//     isEmpty(){
//         return this.head==null
//     }



//     print(){
//         let current=this.head
//         while (current) {
//             console.log(current.data)
//             current=current.next
            
//         }
//     }
// }

// const linked=new linkesList()
// console.log("checking epmty or not",linked.isEmpty());
// linked.enqueue(10)
// linked.enqueue(20)
// linked.enqueue(30)
// linked.enqueue(40)

// // linked.print()

// console.log("first Out",linked.dequeue());
// // console.log("first Out",linked.dequeue());
// console.log("first element",linked.peek());
// linked.print()

//  console.log("connt ...linked",linked.size());


 