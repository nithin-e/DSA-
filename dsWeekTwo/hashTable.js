// class hashTable {
//     constructor(size) {
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(key){
//         let total=0
//         for (let i = 0; i < key.length; i++) {
//           total+=key.charCodeAt(i)
//         }
//         return total%this.size
//     }

//     set(key,value){
// const index= this.hash(key)
// this.table[index]=value
//     }

// get(key){
//  const index=this.hash(key)
// return this.table[index]
// }



// display(){
//     for (let i = 0; i < this.table.length; i++) {

//         if (this.table[i]) {
//             console.log('index',i,"value",this.table[i]);

//         }
//     }
// }
// }


// const practice=new hashTable(4)

// practice.set('ne',"nithn")
// practice.set('ae788',40)
// practice.set('ne','nit')
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