// class QueueUsingStack {
//     constructor() {
//         this.stack1=[]
//         this.stack2=[]
//     }

//     push(element){
//        this.stack1.push(element)
//     }

//     pop(){

//         if (this.stack2.length==0) {
//             while (this.stack1.length>0) {
//                 this.stack2.push(this.stack1.pop())
//             }
//         }

//         return this.stack2.pop()
//     }


//     display(){
//         console.log(...this.stack2,...this.stack1);
        
//     }
// }

// const practice=new QueueUsingStack()

// practice.push(10)
// practice.push(20)
// practice.push(30)
// practice.push(40)


// practice.pop()
// practice.push(100)
// practice.pop()
// practice.display()


// class hashTable {
//     constructor(size) {
//       this.table=new Array(size)  
//       this.size=size
//     }

//     hash(key){
//         let total=0
//         for (let i = 0; i < key.length; i++) {
//              total+=key.charCodeAt(i)   
//         }
//       return  total%key.size
//     }

//     set(key ,value){
//   let index=this.hash(key)
// this.table[index]=value
//     }


//   display(){
//     for (let i = 0; i < this.table.length; i++) {

//         if (this.table[i]) {
//             console.log('index',i,"value",this.table[i]);

//         }
//     }
// }
// }


// const practice=new hashTable(6)

// practice.set("age",23)
// practice.display()



// function insertionSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//        let current=arr[i]
//        let j=i-1
//        while (j>=0&&current<arr[j]) {
//         console.log('.',current);
//         arr[j+1]=arr[j]
//         j--
//         // console.log('j',j);
//        }
//     arr[j+1]=current
//   }
//   return arr
// }

// console.log(insertionSort([9,5,3,8,1,90]))


// function MergeSort(arr) {

//     if (arr.length<=1) {
//         return arr
//     }
//     let mid=Math.floor(arr.length/2)
//     let left=arr.slice(0,mid)
//     let right=arr.slice(mid)
      
//     return Merge(MergeSort(left),MergeSort(right))

//     function Merge(left,right) {
//         let result=[]
//         let leftIndex=0
//         let rightIndex=0
//         while (leftIndex<left.length&&rightIndex<right.length) {
//             if (left[leftIndex]<right[rightIndex]) {
//                 result.push(left[leftIndex])
//                 leftIndex++
//             }else{
//                 result.push(right[rightIndex])
//                 rightIndex++
//             }
//         }

//         return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex))
//     }

// }
// console.log(MergeSort([9,5,3,8,1,90]))

// function occurDuplicate(arr) {
    
//     let seen={}
//     let dup=[]
//    for(let num of arr){
//     if (seen[num]) {
//         seen[num]++
//     } else{
//       seen[num]=1
//       dup.push(num)
//     }

// }
// return dup
// }


// console.log(occurDuplicate([9,5,1,8,1,9]))






// function validParanthesis(s) {   
//     const stack = [];
    
//     for (let i = 0; i < s.length; i++) { 
//         if (s[i] === '(') {
//             stack.push(')');


//         } else if(s[i]=="["){ 
//             stack.push("]")


//         }else if(s[i]=='{'){


//               stack.push("}")
//         }
        
//         else {
//             let value=stack.pop()
//             if ( s[i]!==value ) {
//                 return false;
//             }
//         }
//     }
    
//     return stack.length === 0;
// };

// console.log(validParanthesis("([))"))




// class hashTable {
//     constructor(size) {
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(key){
//     let total=0
//    for (let i = 0; i < key.length; i++) {
//      total+=key.charCodeAt(i)
//    }

//    return total%this.size
//     }


//     set(key,value){
//       let index=this.hash(key)
//       this.table[index]=value
//     }

//     get(key){
//  let index=this.hash(key)
//  return this.table[index]
//     }

//     remove(key){
//     let index=this.hash(key)      
//     if (this.table[index]!==undefined) {
//         this.table[index]=undefined
//     } 

//     }

//     display(){
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i," ",this.table[i])
                
//             }
            
//         }
//     }
// }

// const practice=new hashTable(6)

// practice.set("name",'nithin')
// practice.set("age",20)
// practice.set('pl','ottapalam')

// practice.remove("pl")
// practice.display()

//  console.log(practice.get("pl"))



// bucket chaining
// class hashTable {
//     constructor(size) {
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(key){
//         let total=0
//         for (let i = 0; i < key.length; i++) {
//            total+=key.charCodeAt(i)  
//         }
//         return total%this.size
//     }

//     set(key,value){
//   let index=this.hash(key)
//   if (this.table[index]==undefined) {
//    this.table[index]=[]
//   }
//   this.table[index].push([key,value])
//     }

// get(key){
//     let index=this.hash(key)
//     let bucket=this.table[index]
//     let result=[]
// for (let i = 0; i < bucket.length; i++) {
//    if (bucket[i][0]==key) {
//     result.push(bucket[i][1])
//    }
// }

// return result

// }

// remove(key){
// let index=this.hash(key)
// let bucket=this.table[index]
// for (let i = 0; i < bucket.length; i++) {
//     console.log('.......',bucket[i]);
    
//     if (bucket[i][0]==key) {
//         bucket.splice(i,1)
//         i--
//     }
// }

// }

//     display(){
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i," ",this.table[i] );   
//             }
//         }
//     }
// }

// const practice=new hashTable(7)
// practice.set('name',"nithin")
// practice.set("age",78)
// practice.set("age",28)
// practice.set('place',"ottapalm")

// // console.log(practice.get('place'));
// practice.remove('age')

// practice.display()


// class hashTable {
//     constructor(size) {
//         this.table = new Array(size);
//         this.size = size;
//     }

//     hash(key) {
//         let total = 0;
//         for (let i = 0; i < key.length; i++) {
//             total += key.charCodeAt(i);
//         }
//         return total % this.size;
//     }

//     set(key, value) {
//         let index = this.hash(key);

//         while (this.table[index] && this.table[index][0] !== key) {
//             index = (index + 1) % this.size;
//         }

//         this.table[index] = [key, value];
//     }

//     remove(key){
//      let index=this.hash(key)
//       while (this.table[index]) {
//         if (this.table[index][0]==key) {
//             this.table[index][0]=undefined
//             this.table[index][1]=undefined
//         }
        
//       }
      

//     }

//     get(key){

//         let index=this.hash(key)
//         while (this.table[index]) {
//             if (this.table[index][0]==key) {
//                 return this.table[index][1]
//             }
//            index=(index+1)%this.size
//         }
      

//     }

//     display() {
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i, " ", this.table[i]);
//             }
//         }
//     }
// }

// const practice = new hashTable(10);

// practice.set("name", 'nithin');
// console.log(practice.get('name'));
// practice.set("name", 'haneen');



// console.log(practice.get('name'));


// practice.display();



// class hashTable {
//     constructor(size) {
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(key){
//   let total=0
//   for (let i = 0; i < key.length; i++) {
//     total+=key.charCodeAt(i)
//   }
//   return total%this.size
//     }

//     set(key ,value){
//      let index=this.hash(key)
//       if (!this.table[index]) {
//         this.table[index]=[]
//       }

//       this.table[index].push([key,value])

//     }

//     get(key){
// let index=this.hash(key)
//   let bucket=this.table[index]
// let  result=[]
// for (let i = 0; i < bucket.length; i++) {
//     if (bucket[i][0]==key) {
//         result.push(bucket[i][1])
//     }
// }

// return result
//     }


//     remove(key){
//   let index=this.hash(key)
//   let bucket=this.table[index]
//   for (let i = 0; i < bucket.length; i++) {
//     if (bucket[i][0]==key) {
//         bucket.splice(i,1)
//         i--
//     }
    
//   }

//     }

//     display(){
//         for (let i = 0; i < this.table.length; i++) {
//            if (this.table[i]) {
//             console.log(i," ",this.table[i]);
            
//            }
            
//         }
//     }
// }

// const practice=new hashTable(5)
// practice.set("name",'nithin')
// practice.set('age',40)
// practice.set("age",30)


// // console.log(practice.get('age'));

// practice.remove('age')

//  practice.display()




// class hashTable {
//     constructor(size) {
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(key){
//         let total=0
//         for (let i = 0; i < key.length; i++) {
//             total+=key.charCodeAt(i)
            
//         }
//        return total%this.size
//     }

//     set(key,value){
//    let index=this.hash(key)
//    if (!this.table[index]) {
//     this.table[index]=[key,value]
//    }

//    while (this.table[index]==!undefined) {
//      index=(index+1)%this.size
//    }
//    this.table[index]=[key,value]
//     }

//     get(key){
//         let index=this.hash(key)
//         if (this.table[index][0]==key) {
//             return this.table[index][1]
//         }
//     }

//     remove(key){
//         let index=this.hash(key)
//         while (this.table[index]) {
//             if (this.table[index][0]==key) {
//                 this.table[index]=undefined
//             }
//       index=(index+1)%this.size
//         }
//     }

//     display(){
//         for (let i = 0; i < this.table.length; i++) {
//             if (this.table[i]) {
//                 console.log(i," ",this.table[i])
//             }
            
//         }
//     }
// }

// const practice=new hashTable(8)
// practice.set("name","nithin")
// practice.set("name","ashif")
// practice.set("age",70)

// console.log(practice.get("name"));
// practice.remove('age')

//  practice.display()



// function removedup(arr) {
//     let seen={}
//     let result=[]
//    for(let num of arr){
//        if (seen[num]) {
//          seen[num]++
//        }else{
//         seen[num]=1
//        }
//    }

//    for (const num of arr) {
//     if (seen[num]==1) {
//        result.push(num) 
//     }
//    }

//    return result
// }

// console.log(removedup([2,4,2,5,6,7,6]));


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




// class cercularQue {
//     constructor(size) {
//         this.items=new Array(size)
//         this.size=size
//         this.rear=-1
//         this.frond=-1
//         this.currentlength=0
//     }



//     push(element){
//      this.rear++
//      this.items[this.rear]=element
//      this.currentlength++
//     if (this.frond==-1) {
//      this.frond=this.rear
//     }
//     }

//     pop(){
        
//         this.items[this.frond]=undefined
//         this.frond++
//         this.rear--
//         this.size--
//         this.currentlength--
//         if (this.currentlength==0) {
//             this.frond=-1
//             this.rear=-1
//         }
//     }

//     display(){
//         let str=""
//         for (let i = 0; i < this.currentlength; i++) {
//          let index=(this.frond+i)%this.size
//          str+=this.items[index]+" "
//         }
//         console.log(str);
        
//     }
// }

// const practice=new cercularQue(6)

// practice.push(20)
// practice.push(30)
// practice.push(40)
// practice.push(50)
// practice.push(60)

// practice.pop()
// practice.display()



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