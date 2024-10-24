
// class StackUsingQueu {
//     constructor() {
//         this.queue=[]
//     }

//     push(elament){
//         this.queue.push(elament)
//     }

//     pop(){
//         for (let i = 0; i < this.queue.length-1; i++) {
//             this.queue.push(this.queue.shift())
//         }
//        return this.queue.shift()
//     }

//     display(){
//         console.log(this.queue)   
//     }
// }


// const practice=new StackUsingQueu()

// practice.push(10)
// practice.push(20)
// practice.push(30)
// practice.push(40)
// practice.push(50)

// console.log(practice.pop());


//  practice.display()



// class StackUsingQueu {
//     constructor(data) {
//         this.data=data
//         this.next=null
//     }
// }

// class linkedList {
//     constructor() {
//         this.head=null
//         this.tail=null
//     }

//   push(data){

//     var NewNode=new StackUsingQueu(data)
//     if (this.head==null) {
//         this.head=NewNode
//         this.tail=NewNode
//     }else{

//         this.tail.next=NewNode
//         this.tail=NewNode
//     }
//   }

//   remove(){

//    let current=this.head
//    let prev=null
//    let temp=null

//    while (current.next!=null) {
//      temp=current.next
//     current.next=prev
//     prev=current
//     current=temp
//    }
//     this.head=this.head.next
//   }


//   display(){
//     let current=this.head
//     while (current) {
//         console.log(current.data);
//         current=current.next
//     }
//   }
// }

// const practice=new linkedList()

// practice.push(10)
// practice.push(20)
// practice.push(30)
// practice.push(40)
// practice.push(50)

// practice.remove()
// practice.display()






class stackUsingQueue {
  constructor() {
      this.Queue1=[]
      this.Queue2=[]
  }

  push(element){
   this.Queue2.push(element)    
   while (this.Queue1.length>0) {
      this.Queue2.push(this.Queue1.shift())
   }

   let temp=this.Queue1
   this.Queue1=this.Queue2
   this.Queue2=temp
  }

  pop(){
      this.Queue1.shift()
  }

  display(){
      console.log(this.Queue1);
      
  }
}

const practice=new stackUsingQueue()
practice.push(10)
practice.push(20)
practice.push(30)
practice.push(40)
practice.push(50)


practice.pop()
practice.display()








// class stackUsingQueue {
//     constructor() {
//         this.Queue1=[]
//         this.Queue2=[]
//     }

//     push(element){
//      this.Queue2.push(element)    
//      while (this.Queue1.length>0) {
//         this.Queue2.push(this.Queue1.shift())
//      }

//      let temp=this.Queue1
//      this.Queue1=this.Queue2
//      this.Queue2=temp
//     }

//     pop(){
//         this.Queue1.shift()
//     }

//     display(){
//         console.log(this.Queue1);
        
//     }
// }

// const practice=new stackUsingQueue()
// practice.push(10)
// practice.push(20)
// practice.push(30)
// practice.push(40)
// practice.push(50)


// practice.pop()
// practice.display()