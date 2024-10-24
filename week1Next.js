

// class  Node{
//     constructor(data) {
//         this.data=data
//         this.prev=null
//         this.next=null
//     }
// }

// class linkedlist {
//     constructor() {
//         this.head=null
//         this.tail=null
//     }


//     appent(data){
// const NewNode=new Node(data)
//    if(!this.head){
//     this.head=NewNode
//     this.tail=NewNode
//    }else{
//     this.tail.next=NewNode
//     NewNode.prev=this.tail
//     this.tail=NewNode
//    }

//     }


//     disply(){
//         let current=this.head
//         while (current) {
//             console.log(current.data);
//             current=current.next
//         }
//     }
// }

// const linked=new linkedlist()

// linked.appent(10)
// linked.appent(20)
// linked.appent(30)
// linked.appent(40)

// linked.disply()



// class Node {
//     constructor(data) {
//       this.data=data
//       this.prev=null
//       this.next=null  
//     }
// }

// class linkedlist {
//     constructor() {
//       this.head=null
//       this.tail=null  
//     }

//   appent(data){
// const NewNode=new Node(data)
// if(!this.head){
//     this.head=NewNode
//     this.tail=NewNode
// }else{
//     this.tail.next=NewNode
//     NewNode.prev=this.tail
//     this.tail=NewNode
// }
//   }  

//   display(){
//     let current=this.head
//     while (current) {
//       console.log(current.data);
//         current=current.next
//     }
//   }
// }

// const linked= new linkedlist()


// linked.appent(10)
// linked.appent(20)
// linked.appent(30)
// linked.appent(40)
// linked.display()



// class Node {
//     constructor(data) {
//         this.data=data
//         this.prev=null
//         this.next=null
//     }
// }

// class linkedlist {
//     constructor() {
//      this.head=null
//      this.prev=null
//      this.next=null   
//     }

//     appent(data){
//      const NewNode=new Node(data)   
//      if(!this.head){
//         this.head=NewNode
//         this.tail=NewNode
//      }else{
//         this.tail.next=NewNode
//         this.tail.prev=NewNode
//         this.tail=NewNode
//      }
//     }

//   reverce(){
// /// reverce


//   }



//     display(){
//         let current=this.head
//         while (current) {
//             console.log(current.data);
//             current=current.next

//         }
//     }
// }


// const linked=new linkedlist()
// linked.appent(10)
// linked.appent(20)
// linked.appent(30)
// linked.appent(40)

// linked.display()





// class Node {
//     constructor(data) {
//         this.data=data
//         this.prev=null
//         this.next=null
//     }
// }


// class linkedlist {
//     constructor() {
//        this.head=null
//        this.tail=null 
//     }

//     appent(data){
//   const NewNode=new Node(data)

//   if(!this.head){
//     this.head=NewNode
//     this.tail=NewNode
//   }else{
//     this.tail.next=NewNode
//     this.tail.prev=NewNode
//     this.tail=NewNode
//   }
//     }

// reverce(){

//  let current=this.head
//  let prev=null
//  this.tail=this.head
//  while (current) {
//     let temp=current.next
//     current.next=prev
//     prev=current
//     current=temp
//  }
//  this.head=prev

// }


// display(){
//     let current=this.head
//     while (current) {
//         console.log(current.data)
//         current=current.next 
//     }
// }

// }


// const linked=new linkedlist()

// linked.appent(10)
// linked.appent(20)
// linked.appent(30)
// linked.appent(40)

// linked.reverce()

// linked.display()




// class Node {
//     constructor(data) {
//         this.data=data
//         this.next=null
//     }
// }

// class linkedlist {
//     constructor() {
//         this.haad=null
//     }

//     appent(data){
// const NewNode=new Node(data)
// if (this.head==null) {
//     this.head=NewNode
// }else{
// let current=this.head
//     while (current.next!==null) {
//         current=current.next
//     }

//     current.next=NewNode
// }
//     }



//     duplicate(){
   
//         let current=this.head
//         let prev=null
//         let seen = new Set()
//   while (current.next!==null) {
//     if (seen.has(current.data)) {
//         prev.next=current.next
       
//     }else{
//         seen.add(current.data)
//         prev=current
        
//     }
//      current=current.next
//   }

//     }

//     display(){
//         let current=this.head
//         while (current) {
//             console.log(current.data);
//             current=current.next
//         }
//     }
// }

// const linked=new linkedlist()

// linked.appent(10)
// linked.appent(20)
// linked.appent(30)
// linked.appent(40)
// linked.appent(20)
//  linked.appent(40)

// linked.duplicate()
// linked.display()


// class Node {
//     constructor(data) {
//       this.data=data
//       this.prev=null
//       this.next=null  
//     }
// }

// class linkedlist {
//     constructor() {
//       this.head=null
//       this.tail=null  
//     }


//     appent(data){
//  const NewNode= new Node(data)
// if (this.head==null) {
//     this.head=NewNode
//     this.tail=NewNode
// }else{

//     this.tail.next=NewNode
//     NewNode.prev=this.tail
//     this.tail=NewNode
// }

//     }


//     remove(){
//         let current= this.head
//         let seen=new Set()

//         while (current) {
//             if (seen.has(current.data)) {
//                 current.prev.next=current.next
//             }else{
//                 seen.add(current.data)
//             }
//             current=current.next
//         }
//     }


//     display(){
//                 let current=this.head
//                 while (current) {
//                     console.log(current.data);
//                     current=current.next
//                 }
//             }
// }

// const linked= new linkedlist()
// linked.appent(10)
// linked.appent(30)
// linked.appent(30)
// linked.appent(40)
// linked.appent(40)

// linked.remove()
// linked.display()

// class Node {
//     constructor(data) {
//        this.data=data
//        this.next=null

//     }
// }

// class linkedlist {
//     constructor() {
//         this.head=null
//     }

//     appent(data){
// const NewNode=new Node(data)
// if (this.head==null) {
//     this.head=NewNode
// }else{

//     let current=this.head
// while (current.next!=null) {
//     current=current.next
// }
// current.next=NewNode
// }
//     }


//     reverce(){
//         let current=this.head
//         let prev=null
//         let temp=null

//         while (current!==null) {
//             temp=current.next
//             current.next=prev
//             prev=current
//             current=temp
//         }
//         this.head=prev
//     }

//     display(){
//         let current= this.head
//         while (current) {
//             console.log(current.data)
//             current=current.next
            
//         }
//     }
// }

// const linked= new linkedlist()
// linked.appent(10)
// linked.appent(20)
// linked.appent(30)
// linked.appent(40)


// linked.reverce()
// linked.display()


// class Node {
//     constructor(data) {
//       this.data=data
//       this.prev=null
//       this.next=null  
//     }
// }

// class linkedlist{
//        constructor(){
//     this.head=null
//     this.tail=null
//   }

//   appent(data){
// const NewNode= new Node(data)

// if (this.head==null) {
//     this.head=NewNode
//     this.tail=NewNode
// }else{
//  this.tail.next=NewNode
//  NewNode.prev=this.tail
//  this.tail =NewNode

// }
//   }

//   reverce(){
    
// let current=this.head
// let temp=null

//  while (current!==null) {
//     temp=current.prev
//     current.prev=current.next
//     current.next=temp
//     current=current.prev
//  }

//  this.head=temp.prev

//   }

//   display(){
//     let current= this.head
//     while (current) {
//         console.log(current.data);
//         current=current.next
//     }
//   }

// }

// const linked=new linkedlist()
// linked.appent(10)
// linked.appent(20)
// linked.appent(30)
// linked.appent(40)
// linked.appent(50)


// linked.reverce()
// linked.display()


// function convert(arr) {
// class Node {
//     constructor(data) {
//         this.data=data
//         this.next=null
//     }
// }    

// let head=new Node(arr[0])
// let current=head

// for (let i = 1; i < arr.length; i++) {
//     current.next=new Node(arr[i])
//     current=current.next
// }

// return head
// }

//   function printf(head){
   
    
    
//   let  current=head
//     while (current) {
        
//         console.log(current.data);
//         current=current.next
        
//     }
// }

// const head= convert([2,3,4,5,6,7,8,9,10])

// printf(head)





// reverce(){
//     current =this.head
// let prev=null
// let temp=null
// while (current.next!=null) {
//     temp=current.next
//     current.next=prev
//     prev=current
//     current=temp
// }

// this.head = prev

// }


// function power(pwr) {
//     if (pwr==0) {
//        return 1 
//     }

// return 2* power(pwr-1)

// }

// console.log(power(5));
