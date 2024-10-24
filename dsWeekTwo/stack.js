

// class Stack{
//     constructor() {
//      this.elements=[]
//     }


//     push(element){
//   this.elements.push(element)
//     }

//     remove(){
//         this.elements.pop()
//     }

//     peek(){
//         let firstelement=this.elements[0]
//         return firstelement
//     }

//     size(){
//        let  size= this.elements.length
//         return size
//     }

//     isEmpty(){
//         return this.elements.length==0
//     }

//     print(){
//         console.log(this.elements);
        
//     }
// }


// const practiceStack=new Stack()

// practiceStack.push(10)
// practiceStack.push(20)
// practiceStack.push(30)
// practiceStack.push(40)
// practiceStack.push(50)


// practiceStack.remove()
// practiceStack.print()

// console.log("stack size",practiceStack.size());

//  console.log("stack empty or not",practiceStack.isEmpty());



// class Stack {
//     constructor() {
//       this.element={}  
//       this.frond=0
//       this.rear=0
//     }


//     addelement(elament){
//     this.element[this.rear]=elament
//     this.rear++

//     }
//     remove(){
//     delete this.element[this.rear]
//     this.rear--
//     }

//     peek(){
//      let firstelement=this.element[this.frond]
//      return firstelement
//     }

//     isempty(){
//         return this.frond===this.rear
//     }

//     size(){
//         let stackSize=this.rear-this.frond

//         return stackSize
//     }

//     print(){
//         console.log(this.element);
//     }
// }


// const practiceStack= new Stack()

// practiceStack.addelement(10)
// practiceStack.addelement(20)
// practiceStack.addelement(30)
// practiceStack.addelement(40)

// // practiceStack.remove()
// practiceStack.print()

// console.log('stackSize',practiceStack.size());
// console.log('first element',practiceStack.peek());
// console.log('empty or not',practiceStack.isempty());


// class Stack {
//     constructor(data) {
//        this.data=data
//        this.next=null 
//     }
// }

// class linkesList {
//     constructor() {
//         this.head=null
//         this.tail=null
//     }

//     appent(data){
// const NewNode=new Stack(data)
// if (this.head==null) {
//     this.head=NewNode
//     this.tail=NewNode
// }else{
//     this.tail.next=NewNode
//     this.tail=NewNode
// }

//     }


//     remove(){
//         let current=this.head
//         let tail= this.tail
//          var prev=null
//         while (current.next!==tail) {
//            current=current.next 
//         }

//         current.next=null
//         this.tail=current
//     }


//     peek(){
//        let firstelement=this.head
//        return firstelement.data
//     }

//     size(){
//         let count=0
//       let  current=this.head
//         while (current) {
//             count++
//             current=current.next
//         }
//         return count
//     }

//     isEmpty(){
//         return this.head==null
//     }

//     display(){
//         let current=this.head
//         while (current) {
//            console.log(current.data);
//             current=current.next
//         }
//     }
// }


// const practiceStack=new linkesList()
// practiceStack.appent(10)
// practiceStack.appent(20)
// practiceStack.appent(30)
// practiceStack.appent(40)

// practiceStack.remove()
// practiceStack.display()

// console.log("first element",practiceStack.peek());
// console.log("size of the stack ",practiceStack.size());
// console.log('checking empty or not',practiceStack.isEmpty());



// class Stack {
//     constructor() {
//         this.stack1 = [];
//         this.stack2 = [];
//     }

//     push(element) {
//         this.stack1.push(element);
//     }

// sort(){
//     while (this.stack1.length>0) {
//         let value=this.stack1.pop()

//         while (this.stack2.length>0&&this.stack2[this.stack2.length-1]<value) {
//             this.stack1.push(this.stack2.pop())

//         }
//         this.stack2.push(value)
//     }

    

//     while (this.stack2.length>0) {
//         this.stack1.push(this.stack2.pop())
//     }
//     console.log('....',this.stack1);
// }


//     display() {
//         console.log("Current Stack:", this.stack1);
//     }
// }

// // Testing the Stack class
// const practice = new Stack();
// practice.push(30);
// practice.push(50);
// practice.push(10);
// practice.push(2);
// practice.push(9);

// practice.sort();  
// practice.display();  




// class stack {
//     constructor() {
//         this.stack1=[]
//         this.stack2=[]
//     }

//     push(element){ 
//         for (let i = 0; i < element.length; i++) {
//             this.stack1.push(element[i])
//         }
 
//     }

//     reverceString(){
   
//     while (this.stack1.length>0) {
//         this.stack2.push(this.stack1.pop())
//     }
 
//     // while (this.stack2.length>0) {
//     //     this.stack1.push(this.stack2.pop())
//     // }
   
//     }

//     display(){
//         console.log(this.stack2);
        
//     }
// }



// const practice=new stack()

// practice.push('ashif')
// // practice.push(20)
// // practice.push(30)
// // practice.push(40)
// // practice.push(50)
// practice.reverceString()

//  practice.display()


// function validpary(str) {
   
    
//     let result=[]
// for (let i = 0; i < str.length; i++) {
//     if (str[i]=="(") {
//         result.push(")")
//     }else if(str[i]=="["){
//         result.push("]")
//     }else if(str[i]=="{"){
//       result.push("}")
//     }else{
//         let value=result.pop()
//         if (str[i]!==value) {
//             return false
//         }
//     }

// }

// return result.length==0

// }

// console.log(validpary('([])'))