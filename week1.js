


// function Fibonacci (n) {
//    const arr=[0,1]
// for (let i = 0; i < 10; i++) {
//    let sum=arr[i]+arr[i+1]
//    arr.push(sum)
    
// }
// return arr
// }

// console.log(Fibonacci(6));
// console.log(Fibonacci(3));

// function Fibonacci (n) {

//    let arr=[0,1]
//    for (let i = 2; i < n; i++) {
//       arr[i]= arr[i-1]+arr[i-2]

//    }
//    return arr
// }

// console.log(Fibonacci(8));



// factorial



// function factorial(n) {
//    let sum=1
//    for(let i =n ; i > 1; i--){
//       sum*=i
//    }
//    return sum
// }

// console.log(factorial(4));
// console.log(factorial(5));


// function prime(n) {
   
//    if(n<2){
//       return false
//    }
   
//       for (let i = 0; i < n; i++) {
//        if(n%2==0){
//          return false
//        }
//    }
//    return true
// }

// console.log(prime(8));
// console.log(prime(1));
// console.log(prime(3));

// function power(n) {
//    return n*n*n
// }

// console.log(power(1));
// console.log(power(2));
// console.log(power(5));



// Fibonacci with recression

// function Fibonacci(n) {

//    if(n<2){
// return n
//    }
// return  Fibonacci(n-1)+Fibonacci(n-2)
// }
// console.log(Fibonacci(1));


// function summ(arr,i=0,sum=0) {
//    if(i==arr.length){
      
      
//       return sum
//    }
//    return summ(arr,i+1,sum+arr[i])
// }

// console.log(summ([10,20,30,40]))



// function evenSum(arr,i=0,sum=0) {
   
// if(i==arr.length){
//    console.log('one tyme');
//    return sum
// }
//    return evenSum(arr,i+1,sum+=arr[i]%2==0?arr[i]:0)
// }

// console.log(evenSum([2,1,3,4,5,6]))


// function reverceString(revStr) {
//    let str=""       
//    for (let i =revStr.length-1; i >=0; i--) {
//       str+=revStr[i]
//    }
//    return str
// }


// console.log(reverceString('ashif'));


// function reverceString(revStr,i=revStr.length-1,str="") {
//   if (i<0) {
//    return str
//   }
//   return reverceString(revStr,i-1,str+=revStr[i])
// }

// console.log(reverceString('ashif'));



// function removeTarget(removestr,target,i=0,str="") {
//   if(i===removestr.length){
//     return str
//   }

//    return removeTarget(removestr,target,i+1,str+=removestr[i]==target?"":removestr[i])
// }


// console.log(removeTarget('ashif', 'a'));

// 5!=5×4×3×2×1=120
// function factorial(num,sum=1) {
//   if(num==0){
//     return sum
//   }
//   return factorial(num-1,sum*=num)
// }

// console.log(factorial(5))

// function febinocci(num,i=0,arr=[0,1]) {

//   if(num==i)return arr
// arr.push(arr[i]+arr[i+1])
//   return febinocci(num,i+1,arr)
// }

// console.log(febinocci(5));


// function addSum(arr,i=0,a=[]) {
//   if(arr.length==i)return a
  
// a.push(arr[i]%2==0?arr[i]:0)
//   return addSum(arr,i+1,a)
// }

// console.log(addSum([1,2,3,4,5,6,7,8]));



// function binary(arr,target) {
//   let firstposition=0
//   let lastPosition=arr.length-1
//   while(firstposition<lastPosition){
//     const mid=  Math.floor((firstposition+lastPosition)/2)
//      if(arr[mid]==target){
//    return mid
//      }else if(arr[mid]<target){
//       firstposition=mid+1
//      }else{
//       lastPosition=mid-1
//      }
//   }

// }

// console.log(binary([10,20,30,40,50,60],50));


// function binaryserchRecrasion(arr,target,left=0,right=arr.length-1) {
//   if (left>right) {
//     return -1
//   }
// let mid = Math.floor((left+right)/2)
//  if(arr[mid]==arr[target]){
//  return arr[mid]
// }else if(arr[mid]<arr[target]){
// return binaryserchRecrasion(arr,target,mid+1,right)
// }else{
// return binaryserchRecrasion(arr,target,left,mid-1)
// }

// }

// console.log(binaryserchRecrasion([10,20,30,40,50,60],3))


// function linearSerarch(arr,target) {
//   for (let i = 0; i < arr.length; i++) {
//   if(arr[i]===target){
//     return arr[i]
//     }
//   }  

//   return -1
// }

// console.log(linearSerarch([10,20,30,40,50,60,70],40));


// function linearSerarch(arr,target,i=0) {

//   if(arr.length==i)return -1

//   if(arr[i]==target){
//    return i
//   }
  
// return linearSerarch(arr,target,i+1)


// }

// console.log(linearSerarch([10,20,30,40,50,60],40));


//linked list

// class Node{
//   constructor(data){
//   this.data=data
//   this.next=null
//   }
// }

// class Linkedlist{
//   constructor(){
//  this.head=null
//   }

//   appent(data){
//   const newNode=new Node(data)

//   if(this.head==null){
//     this.head=newNode
//     return
//   }else{
//     let current=this.head
//     while (current.next!==null) {
//       current =current.next
//     }
//     current.next=newNode
//   }
//   }


//   display(){
//    let current=this.head
//     while (current) {
//       console.log(current.data);
//       current=current.next
      
//     }
//   }

// }

// const linkedlist=new Linkedlist()

// linkedlist.appent(10)
// linkedlist.appent(3)

// linkedlist.display()


// class Node {
//   constructor(data) {
//     this.data=data
//     this.next=null
//   }
// }

// class Linkedlist{
//   constructor(){
//     this.head=null
//   }

// appent(data){
// let newNode=new Node(data)
// if(this.head==null){
//   this.head=newNode
// }else{
// let current = this.head

// while(current.next!==null){
// current=current.next
// }
//    current.next=newNode
// }   
// }  

// display(){
//   let correct = this.head
//   while (correct) {
//     console.log(correct);
//     correct=correct.next

//   }
// }
// }

// const linked=new Linkedlist()

// linked.appent(20)
// linked.appent(2)

// linked.display()


// class Node{
//   constructor(data){
//   this.data=data
//   this.next=null
//   }
// }

// class Linkedlist{
//  constructor(){
//    this.head=null
//  }

//  prepent(data){
//   let newNode=new Node(data)

//   if (this.head==null) {
//     this.head=newNode
//   }else{
//     this.head=newNode
//     newNode=this.head
//   }
  
//  }

//  display(){
//   let current=this.head
//   while(current){
//     console.log(current)
//     current=current.next
//   }
//  }
// }

// const linked=new Linkedlist()
// linked.prepent(10)
// linked.prepent(1)
// linked.prepent(99)


// linked.display()

// class Node {
//   constructor(data) {
//     this.data=data
//     this.next=null
//   }
// }


// class linkedlist {
//   constructor() {
//     this.head=null
//   }
// appent(data){
// const NewNode=new Node(data)

// if(this.head==null){
//   this.head=NewNode
//   return
// }else{

//   let current= this.head
//   while (current.next!==null) {
//     current=current.next
//   }
//   current.next=NewNode
// }
// }



// insersion(target,data){

//   let current=this.head

// while (current!==null&&current.data!==target) {
//   current=current.next
// }

// if(current!==null){
// const newNode=new Node(data)
// newNode.next=current.next
// current.next=newNode

// }



// }

// display(){
//   let current=this.head
//   while (current) {
//     console.log(current.data)
//     current=current.next
//   }
// }

// }

// const linked =new linkedlist()

// linked.appent(10)
// linked.appent(20)
// linked.appent(30)
// linked.insersion(20,25)

// linked.display()

// class Node {
//   constructor(data) {
//     this.data=data
//     this.next=null
//   }
// }

// class linkedlist {
//   constructor() {
//     this.head=null
//   }

//   appent(data){
// const NewNode=new Node(data)

// if(this.head==null){
//   this.head=NewNode
//   return
// }else{

// let current=this.head

// while (current.next!==null) {
//   current=current.next
// }
// current.next=NewNode
// }
//   }

// insersion(index,data){

//   let NewNode=new Node(data)
//   if(index==0){
//    NewNode.next=this.head
//     this.head=NewNode
//     return
//   }else{

//     let current=this.head
//     let previous=null
//     let currentIndex=0

//     while (current!==null&&currentIndex<index) {
//       previous=current
//       current=current.next
//       currentIndex++
//     }

//    if( currentIndex==index){
//     NewNode.next=current
//     previous.next=NewNode
   
//    }
//   }
// }
//   display(){
//     let current=this.head
//     while (current) {
//       console.log(current.data)
//       current=current.next
//     }
//   }
// }

// const linked=new linkedlist()

// linked.appent(10)
// linked.appent(20)
// linked.appent(30)
// linked.appent(40)
// linked.appent(50)




// linked.insersion(0,25)
// linked.display()


// class Node {
//   constructor(data) {
//     this.data=data
//     this.next=null
//   }
// }

// class linkedlist{
// constructor(){
//   this.head=null
// }

// appent(data){
// const newNode=new Node(data)
// if(this.head==null){
//   this.head=newNode
//   return
// }else{
// let current=this.head
// while (current.next!==null) {
//   current=current.next
// }
// current.next=newNode
// }
// }


// deleteValue(index){

//   if (index==0) {
//     this.head=this.head.next
//     return
//   }else{
// let current=this.head
// let previous=null
// let currentIndex=0

// while (current!=null&&currentIndex<index) {
//   previous=current
//   current=current.next
//   currentIndex++
// }


//   previous.next=current.next
//   }

// }

// display(){
//   let current=this.head
//   while (current) {
//     console.log(current.data)
//     current=current.next
    
//   }
// }
// }

// const linked =new linkedlist()
// linked.appent(10)
// linked.appent(20)
// linked.appent(30)
// linked.appent(40)


// linked.deleteValue(3)
// linked.display()



// class Node {
//   constructor(data) {
//     this.data=data
//     this.next=null
//   }
// }

// class linkedlist {
//   constructor() {
//     this.head=null
//   }

//   appent(data){
//     const newNode=new Node(data)
//     if (this.head==null) {
//       this.head=newNode
//     }else{
//       let current= this.head
//       while (current.next!==null) {
//         current=current.next
//       }
//       current.next=newNode
//     }
//   }


//   deletValue(target){
//   if (this.head.data==target) {
//    this.head=this.head.next
//    return
//   }else{

// let current=this.head
// let previous=null
// while (current!==null&&current.data!==target) {
//   previous=current
//   current=current.next
// }

// console.log('previous',previous.data);

// console.log('current',current.data);
//  previous.next=current.next

//   }
//   }

//   display(){
//     let current=this.head
//     while (current) {
//       console.log(current.data);
//       current=current.next
//     }
//   }
// }

// const linked=new linkedlist()

// linked.appent(10)
// linked.appent(20)
// linked.appent(30)
// linked.appent(40)


// linked.deletValue(40)
// linked.display()



// class Node{
//   constructor(data){
//     this.data=data
//     this.next=null
//   }
// }

// class linkedlist{
//   constructor(){
//     this.head=null
//   }

//   append(data){
// const NewNode= new Node(data)

// if(this.head==null){
//   this.head=NewNode
// }else{


// let current=this.head
// while (current.next!==null) {
//   current=current.next
// }
// current.next=NewNode

// }
//   }


//   middle(){

//     let one=this.head
//     let two=this.head
//     while (two!==null&&two.next!==null) {
//       one=one.next
//       two=two.next.next
//     }
// console.log('................',one.data);
// return one.data

//   }

// }

// const linked=new linkedlist()
// linked.append(10)
// linked.append(20)
// linked.append(30)
// linked.append(40)
// linked.append(50)


// linked.middle()



// class Node {
//   constructor(data) {
//     this.data=data
//     this.next=null
//   }
// }

// class linkedlist {
//   constructor() {
//     this.head=null
//   }

//   appent(data){
//     const NewNode=new Node(data)

//   if(this.head==null){
//     this.head=NewNode
//     return
//   }else{
// let current=this.head
// while (current.next!==null) {
//   current=current.next
// }
// current.next=NewNode
//   }
//   }

//   deleteMiddle(){

// let one=this.head
// let two=this.head
// let previous=null

// while (two!==null&&two.next!==null) {
//   previous=one
//   one=one.next
//   two=two.next.next
// }

// previous.next=one.next

//   }


//   display(){
//     let current=this.head

//     while (current) {
//       console.log(current.data)
//       current=current.next
      
//     }
//   }
// }

// const linked=new linkedlist()

// linked.appent(10)
// linked.appent(20)
// linked.appent(30)
// linked.appent(40)
// linked.appent(50)

// linked.deleteMiddle()

// linked.display()



// class Node {
//   constructor(data) {
//     this.data=data
//     this.next=null
//   }
// }


// function largestNode(head) {

//    if (head === null) {
//     return null; 
//   }

  
// let max=head.data
// let two=head
// while (two!==null) {
//   if (two.data>max) {
//     max=two.data
//   }
//   two=two.next
// }
// return max
// }


// let head= new Node(10)
// head.next=new Node(20)
// head.next.next=new Node(40)
// head.next.next.next=new Node(15)


// console.log('.............',largestNode(head));




// class Node {
//   constructor(data) {
//     this.data=data
//     this.next=null
//   }
// }


// class linkedlist {
//   constructor() {
//     this.head=null
//   }

//   appent(data){
//    const NewNode=new Node(data)
//    if (this.head==null) {
//     this.head=NewNode
//    }else{
//     let current=this.head
//     while (current.next!==null) {
//       current=current.next
//     }
//     current.next=NewNode
//    }
  
//   }


//  middle(){

//   let one=this.head
//   let two=this.head

//   while (two!==null&&two.next!=null) {
//     one=one.next
//     two=two.next.next
//   }

//   console.log("........",one.data);
  
//   }


//   display(){
//     let current=this.head
//     while (current) {
//       console.log(current.data)
//       current=current.next
//     }


//   }

// }


// const linked=new linkedlist()
// linked.appent(10)
// linked.appent(20)
// linked.appent(30)
// linked.appent(40)
// linked.appent(50)

// linked.display()
//  linked.middle()





// class Node {
//   constructor(data) {
//     this.data=data
//     this.next=null
//   }
// }


// class linkedlist {
//   constructor() {
//     this.head=null
//   }

//   appent(data){
//    const NewNode=new Node(data)
//    if (this.head==null) {
//     this.head=NewNode
//    }else{
//     let current=this.head
//     while (current.next!==null) {
//       current=current.next
//     }
//     current.next=NewNode
//    }
  
//   }


//   reverce(){

//     let previous=null
//     let current=this.head
//     let temp=null
//     while (current!==null) {
//        temp=current.next
//        current.next=previous
//        previous=current
//        current=temp
//     }

//     this.head=previous
//   }



//   display(){
//     let current=this.head
//     while (current) {
//       console.log(current.data)
//       current=current.next
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
//  linked.display()









//////////////////////////////////////////////////////////////////////



// class Node {
//   constructor(data) {
//     this.data=data
//     this.next=null
//   }
// }


// class linkedlist {
//   constructor() {
//     this.head=null
//   }

//   appent(data){
//    const NewNode=new Node(data)
//    if (this.head==null) {
//     this.head=NewNode
//    }else{
//     let current=this.head
//     while (current.next!==null) {
//       current=current.next
//     }
//     current.next=NewNode
//    }
  
//   }

// convertarr(){
//   let current=this.head

//   let arr1=[]
//   while (current!==null) {
//     arr1.push(current.data)
//     current=current.next
//   }

//   console.log(arr1);
  
// }
 



//   display(){
//     let current=this.head
//     while (current) {
//       console.log(current.data)
//       current=current.next
//     }
//   }

// }


// const linked=new linkedlist()
// linked.appent(10)
// linked.appent(20)
// linked.appent(30)
// linked.appent(40)
// linked.appent(50)


// linked.convertarr()
//  linked.display()





// class Node {
//   constructor(data) {
//     this.data=data
//     this.next=null
//   }
// }


// function ArrToLinked(arr) {
  
//   let NewNode=new Node(arr[0])
//   let current=NewNode
//   for (let i = 1; i < arr.length; i++) {
//     current.next=new Node(arr[i])
//     current=current.next
    
//   }

//   return NewNode
// }


// console.log(ArrToLinked([1,2,3,4,5,6,7]));




// function binarySerch(arr,index) {
  

// let left=0
// let right =arr.length-1

// while (left<=right) {
//   let mid = Math.floor((left + right) / 2);
//   console.log('mid',mid);
  

//   if (arr[mid]==index) {
//    return mid
//   }else if(arr[mid]<index){

//     left=index+1
//   }else{

//     right=index-1
//   }
// }
// return -1
// }

// console.log(binarySerch([10,20,30,40,50,],2));


// function binaryserchRecrasion(arr,target,left=0,right=arr.length-1) {
//   if (left>right) {
//     return -1
//   }
// let mid = Math.floor((left+right)/2)
//  if(arr[mid]==arr[target]){
//  return arr[mid]
// }else if(arr[mid]<arr[target]){
// return binaryserchRecrasion(arr,target,mid+1,right)
// }else{
// return binaryserchRecrasion(arr,target,left,mid-1)
// }

// }

// console.log(binaryserchRecrasion([10,20,30,40,50,60],3))




// function factorial(num,sum=1) {
//   if (num==0) {
//     return sum
//   }

//   return factorial(num-1,sum*=num)

// }

// console.log(factorial(5));

// function binarySearchInRecursion(arr, target, left = 0, right = arr.length - 1) {
//   if (left > right) {
//     return -1; 

//   }

//   let mid = Math.floor((left + right) / 2);

//   if (arr[mid] === target) {
//     return mid; 
//   } else if (arr[mid] < target) {
//     return binarySearchInRecursion(arr, target, mid + 1, right);
//   } else {
//     return binarySearchInRecursion(arr, target, left, mid - 1);
//   }
// }

// console.log(binarySearchInRecursion([10, 20, 30, 40, 50], 40)); 




// function findSum(arr,i=0,sum=0) {
    
// if (arr.length==i) {
//     return sum
// }

//  return findSum(arr,i+1,sum+=arr[i])
// }


// console.log(findSum([2,4,6,8,10]))


// function dup(arr,i=0,dparr=[]) {
//     if (arr.length==i) {
//         return dparr
//     }

//     if (!dparr.includes(arr[i])) {
//         dparr.push(arr[i])
//     }
// return dup(arr,i+1,dparr)
// }

// console.log(dup([1,2,3,4,2,4,6]))


// function strReverce(str,i=str.length-1,NewStr='') {
//     if (i<0) {
//         return NewStr
//     }
   
//     return strReverce(str,i-1,NewStr+=str[i])
// }

// console.log(strReverce('shameem'));




// function removeDUP(str,target,i=0,NewStr='') {
//     if (str.length==i) {
//         return NewStr
//     }

//     if (str[i]!==target) {
//         console.log(str[i]);
        
//     }

// return removeDUP(str,target,i+1,NewStr)
// }

// console.log(removeDUP('nithin','n'));


// function binaryserch(arr,index,left=0,right=arr.length-1) {
//   if(left>right){
//     return -1
//   }
  
//    let mid=Math.floor((left+right)/2)
//    if (mid==index) {
//     return arr[mid]

//    }else if(mid<index){
//     return  binaryserch(arr,index,mid+1,right)
//    }else{
//    return binaryserch(arr,index,left,mid-1)
//    }
// }

// console.log(binaryserch([10,20,30,40,50],3));

// [10,20,[20,40],30,40,[2,4],50,60,70]



// function factorial(num,sum=1) {
//     if (num===0) {
//         return sum
//     }


//     return factorial(num-1,sum*num)
// }

// console.log(factorial(5));

// function Fibonacci(num,i=0,arr=[0,1]) {
    
// if (num==i) {
//     return arr
// }

//   arr.push(arr[i]+arr[i+1])
//    return  Fibonacci(num,i+1,arr)
// }



// console.log(Fibonacci(5));




