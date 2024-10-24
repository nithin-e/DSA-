
// class cercularQueue {
//     constructor(size) {
//         this.items=new Array(size)
//         this.size=size
//         this.currentLength=0
//         this.frond=-1
//         this.rear=-1
//     }
//     isEmpty(){
//  return this.currentLength==0
//   }
   
// isFull(){
//     return this.currentLength==this.size
// }

// enQueue(elament){
//     if (!this.isFull()) {
//         this.rear=this.rear+1
//         this.items[this.rear]=elament
//         this.currentLength+=1
//         if (this.frond=-1) {
//             this.frond=this.rear
//         }
//     }
// }

// deQueue(){
//     let firstelement=this.items[this.frond]
//     this.items[this.frond]=null
//    this.frond=this.frond+1
//     this.currentLength-=1
//     this.size-=1
//     if (this.isEmpty()) {
//         this.frond=-1
//         this.rear=-1
//     }

//     return firstelement
// }

// print(){
//     let str=""
//     let i
//     for ( i = 0; i < this.size; i++) {
//        str += this.items[i]!== null ?`${this.items[i]}` :  "   ";
//         // str += this.items[i] !== null ? `${this.items[i]} ` : "_ ";

//     }

//     console.log(str.trim())
    

// }

// }

// const practice=new cercularQueue(4)

// practice.enQueue(10)
// practice.enQueue(20)
// practice.enQueue(30)
// practice.enQueue(40)

// practice.print()








class cercularQueue {
    constructor(size) {
        this.items=new Array(size)
        this.size=size
        this.frond=-1
        this.rear=-1
        this.currentlength=0
    }

    isFull(){
        return this.size==this.currentlength
    }

    isEmpty(){
        return this.currentlength==0
    }

    push(element){
        
        
       if (!this.isFull()) {    
        this.rear++
        this.items[this.rear]=element
        this.currentlength++
        if (this.frond==-1) {
            this.frond=this.rear
        }
       }

       
       
    }


    pop(){
        this.frond++
        this.items[this.frond]=null
        this.currentlength--
        this.size--
        if (this.isEmpty()) {
            this.frond=-1
            this.rear=-1
        }
    }

   
    display() {
       
            let str = '';
            for (let i = 0; i < this.currentlength; i++) {
                const index = (this.frond + i) % this.size; 
                str += this.items[index] + ' ';
            }
            console.log(str);
       
    }
}


const practice=new cercularQueue(5)

practice.push(10)
practice.push(20)
practice.push(30)
practice.push(40)
practice.push(50)

practice.display()