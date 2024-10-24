// function unique(str, i=0 ,NewStr=[]) {
//     if (i==str.length-1) {
//         return NewStr.toString()
//     }

//     if (!NewStr.includes(str[i])) {
//         NewStr.push(str[i])
//     }
//   return unique(str,i+1,NewStr)
// }
// console.log(unique('nithin'));

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34


// class Node {
//     constructor(data) {
//       this.data=data
//       this.next=null  
//     }
// }


// class linkedlist {
//     constructor() {
//        this.head=null 
//     }



//     display(){
//         let current =this.head
//         while (current) {
//             console.log(current.data);
//             current=current.next
//         }
//     }
// }

// const linked=new linkedlist()

// linked.prepent(10)
// linked.prepent(20)
// linked.prepent(30)
// linked.display()


// function arrayreverce(arr ,i=0) {
//     if (i>arr.length/2) {
//         return arr
//     }
//     [arr[i],arr[arr.length-1-i]] =[arr[arr.length-1-i],arr[i]]

 
//     return arrayreverce(arr,i+1)
// }

// console.log(arrayreverce([2,4,5,6,7,8]));


// function summ(arr,i=0,sum=0) {
//    if (arr.length==i) {
//     return sum
//    } 
//     return summ(arr,i+1,sum+arr[i])
// }
// console.log(summ([2,3,4,5,6,7,8]));



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
//     const Newnode=new Node(data)
//     if (this.head==null) {
//         this.head=Newnode
//     }else{
//   let current=this.head
//   while (current.next!=null) {
//     current=current.next
//   }
//   current.next=Newnode

//     }
//     }

//     removedup(){

//         let current=this.head
//         while (current!=null) {
//             let runner=current
//             while (runner.next!==null) {
//                 if (runner.next.data==current.data) {
//                    runner.next=runner.next.next 
//                 }else{
//                     runner=runner.next
//                 }
//                 current=current.next
//             }
//         }



//     }




//     display(){
//         let current=this.head
//         while (current) {
//             console.log(current.data);
//             current=current.next
//         }
//     }
// }


// const linked= new linkedlist()

// linked.appent(10)
// linked.appent(20)
// linked.appent(30)
// linked.appent(30)
// linked.appent(10)
// linked.appent(20)

// linked.removedup()


// linked.display()

// function febinocci(num,i=0,arr=[0,1]) {
//     if(num<=arr.length){
//         return arr
//     }

   
//        arr.push(arr[i]+arr[i+1]) 
    
// return febinocci(num,i+1,arr)

// }

// console.log(febinocci(5));


// class Node {
//     constructor(data) {
//         this.data=data
//         this.next=null
//     }
// }


// class linkedlist {
//     constructor() {
//         this.head=null
//     }

//     appent(data){
//     const Newnode=new Node(data)
//     if (this.head==null) {
//         this.head=Newnode
//     }else{
//         let current=this.head
//         while (current.next!==null) {
//             current=current.next
//         }
//         current.next=Newnode
//     }
//     }

// reverce(){

// let current=this.head
// let prev=null
// let temp=null

// while (current!==null) {
//     temp=current.next
//     current.next=prev
//     prev=current
//     current=temp
// }
// this.head=prev


// }



//     display(){
//         let current=this.head
//         while (current) {
//             console.log(current.data);
//             current=current.next
//         }
//     }

// }

// const linked= new linkedlist()

// linked.appent(10)
// linked.appent(20)
// linked.appent(30)
// linked.appent(40)
// linked.appent(50)

// // linked.display()


// linked.reverce()
// linked.display()


// class Node {
//     constructor(data) {
//       this.data=data
//       this.next=null  
//     }
// }

// class linkedlist {
//     constructor() {
//         this.head=null
//     }

//   prepent(data){
// const NewNode=new Node(data)

// if (this.head==null) {
//     this.head=NewNode
// }else{
// let current=this.head
//  NewNode.next=current
//  this.head=NewNode

// }
//   }

//   display(){
//     let current=this.head
//     while (current) {
//         console.log(current.data);
//         current=current.next
//     }
//   }
// }

// const linked=new linkedlist()
// linked.prepent(30)
// linked.prepent(20)
// linked.prepent(10)

// linked.display()






// class Node {
//     constructor(data) {
//         this.data=data
//         this.next=null
//     }
// }

// class linkedlist {
//     constructor() {
//         this.head=null
//     }

//     appent(data){
//         const NewNode=new Node(data)

//         if (this.head==null) {
//             this.head=NewNode
//         }else{
//         let current= this.head
//         while (current.next!==null) {
//             current=current.next
//         }
//         current.next=NewNode
//         }
//     }

//     duplicate(){
//        let current=this.head
//        let prev=null
//        let seen= new Set()
//        while (current!==null) {
//         if (seen.has(current.data)) {
            
//             prev.next=current.next
//         }else{
//             seen.add(current.data)
//             prev=current
//         }

//         current=current.next

//        }
//     }

//     display(){
//         let current=this.head
//         while (current) {
//          console.log(current.data)
//          current=current.next
            
//         }
//     }
// }


// const linked= new linkedlist()
// linked.appent(10)
// linked.appent(20)
// linked.appent(30)
// linked.appent(10)


// linked.duplicate()
// linked.display()








// class Node {
//         constructor(data) {
//           this.data=data
//           this.prev=null
//           this.next=null  
//         }
//     }
    
//     class linkedlist {
//         constructor() {
//            this.head=null
//            this.tail=null 
//         }
    
//         appent(data){
//     const Newnode=new Node(data)
//     if (this.head==null) {
//         this.head=Newnode
//         this.tail=Newnode
//     }
    
//     this.tail.next=Newnode
//     Newnode.prev=this.tail
//     this.tail=Newnode
//         }
    
    
//     removeDup(){

// let current= this.head
// let seen=new Set()
// while (current!==null) {
   
    
//     if (seen.has(current.data)) {
//         current.prev.next=current.next

//     }else{
//         seen.add(current.data)
//     }

//     current=current.next
// }

//     }
    
       
//         display(){
//             let current=this.head
//             while (current) {
//                 console.log(current.data);
//                 current=current.next
//             }
//         }
//     }
    
//     const linked= new linkedlist()
//     linked.appent(10)
//     linked.appent(20)
//     linked.appent(50)
//     linked.appent(40)
//     linked.appent(50)
    
    
//     linked.removeDup()
//     linked.display()
    

// function convert(arr) {
//     class Node {
//         constructor(data) {
//            this.data=data
//            this.next=null 
//         }
//     }

//  let head=new Node(arr[0])
//  let current=head

//     for (let i = 1; i < arr.length; i++) {
//      current.next= new Node(arr[i])  
//      current=current.next
//     }

//     return head
// }

// function print(head) {
//     let current=head
//     while (current.next) {
//         console.log(current.data);
//         current=current.next
//     }

// }


//   const printing=  convert([10,20,30,40,50,60])

// print(printing)

