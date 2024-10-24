
// class QueueUsingStack{
//     constructor(){
//         this.stack1=[]
//         this.stack2=[]
//     }

//     enQueue(element){
//       this.stack1.push(element)
//     }

//     deQueue(){
       
//         if (this.stack2.length==0) {
//             while (this.stack1.length>0) {
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         this.stack2.pop()
//     }

//     peek(){
//         if (this.stack2.length==0) {
//             while (this.stack1.length>0) {
//                 this.stack2.push(this.stack1.pop())
//             }
//         }
//         return this.stack2[this.stack2.length-1]
//     }


//     display() {
//         console.log("Stack1 (enQueue stack):", this.stack1);
//         console.log("Stack2 (deQueue stack):", this.stack2);
//     }
// }


// const practice=new QueueUsingStack()

// practice.enQueue(10)
// practice.enQueue(20)
// practice.enQueue(30)
// practice.enQueue(40)


// practice.deQueue()
// practice.display()



// class  stackData{
//     constructor() {
//        this.Stack1=[] 
//        this.Stack2=[]
//     }

//     push(elament){
// this.Stack1.push(elament)
//     }


//     remove(target){
//         for (let i = 0; i < this.Stack1.length; i++) {
//             if (target!==this.Stack1[i]) {
//                 this.Stack2.push(this.Stack1.pop())
//             }else{
//                this.Stack1.pop() 
//             }
//         }

//         while (this.Stack2.length!=0) {
//             this.Stack1.push(this.Stack2.pop())
//         }
//     }
// }





class QueueUsingStack {
    constructor() {
        this.Stack1=[]
        this.Stack2=[]
    }

    push(element){
        this.Stack1.push(element)
    }

    remove(){
        while (this.Stack1.length>0) {
            this.Stack2.push(this.Stack1.pop())
        }

        return this.Stack2.pop()
    }

    frond(){
     return  this.Stack2[this.Stack2.length-1]
    }

    display(){
        console.log(...this.Stack2.reverse(),...this.Stack1);
        
    }
}


const practice=new QueueUsingStack()

practice.push(10)
practice.push(20)
practice.push(30)
practice.push(40)
practice.push(50)


 practice.remove()
//  practice.remove()


practice.display()
console.log(practice.frond());






// class  QueueUsingStack{
//     constructor() {
//         this.stack1=[]
//         this.stack2=[]
//     }

//     push(element){
//       this.stack1.push(element)
//     }

//     pop(){
//         while (this.stack1.length>0) {
//             this.stack2.push(this.stack1.pop())
//         }
//         this.stack2.pop()
//         while (this.stack2.length>0) {
//             this.stack1.push(this.stack2.pop())
//         }
//     }
    

//     display(){
//         console.log(this.stack1);
        
//     }
// }

// const practice=new QueueUsingStack()

// practice.push(10)
// practice.push(20)
// practice.push(30)
// practice.push(40)
// practice.push(50)

// practice.pop()
// practice.display()