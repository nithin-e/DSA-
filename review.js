
// // if (Math.abs(target-Node.data)<Math.abs(target-close)) {
// //     close=Node.data
// // }



// class Node {
//     constructor(data) {
//         this.data=data
//          this.left=null
//          this.right=null
//     }
// }

// class tree {
//     constructor() {
//         this.root=null
//     }
    

//     insert(data){
// let NewNode=new Node(data) 
// if (this.root==null) {
//     this.root=NewNode
// }else{
//    let current=this.root
//    while (true) {
//      if (NewNode.data<current.data) {
//         if (current.left==null) {
//             current.left=NewNode
//             break
//         }else{
//             current=current.left
//         }

//      }else if(NewNode.data>current.data){
//         if (current.right==null) {
//             current.right=NewNode
//             break
//         }else{
//             current=current.right
//         }
//      }else{
//         console.log("duplicate is not possible in bst",NewNode.data);
//         return  
//      }
//    }
// }
//     }



//     findClosest(target){

//         let Node=this.root
//         let close=Node.data
//      while (Node) {
//         if (Math.abs(target-close)>Math.abs(Node.data-target)) {
//             close=Node.data
//         }


//         if (target<Node.data) {
//             Node=Node.left
//         }else if(target>Node.data){
//             Node=Node.right
//         }else{
//             return Node.data
//         }
//      }

//      return close
//     }


//     findNode(data){
//   let current=this.root

//      while (current!==null) {
//         if (data<current.data) {
//             current=current.left
//         }else if(data>current.data){
//          current=current.right
//         }else{
//             return current
//         }
//      }

     

//     }


//     height(root){

//         if (!root) {
//             return -1
//         }
//     let leftHeight= this.height(root.left)
//     let righttHeight= this.height(root.right)

//     return Math.max(leftHeight,righttHeight)+1
//     }


//     finddepth(root,data){

//   let current=root
//   let count=0
//   while (current!==null) {
//     if (data<current.data) {
//         count++
//         current=current.left
//     }else if(data>current.data){
//         count++
//         current=current.right
//     }else{
//         return count
//     }
//   }
//     }

//     evenNumber(root,arr=[]){

//        if (root) {
//          if (root.data%2==0) {
           
            
//             arr.push(root.data)
//          }
//          this.evenNumber(root.left,arr)
//          this.evenNumber(root.right,arr)

//        } 
//        return arr
//         }

    
// findMinValue(root){

//     if (!root.left) {
//        return root.data 
//     }

//      return this.findMinValue(root.left)
// }
    

// secondLargest(){

//     let first=-Infinity
//     let second=-Infinity
//     let current=this.root

//     function traverce(current) {
//         if (!current) {
//             return;
//         }

//         if (current.data>first) {
//             second=first
//             first=current.data
//         }else if(current.data>second&&current.data!==first){
//            second=current.data
//         }

//         traverce(current.left)
//          traverce(current.right)

//     }
//     traverce(current)

//     return second
// }

// isBstOrNot(){
    
// }




   
//     preOrder(root){
//         if (root) {
//             console.log(root.data)
//             this.preOrder(root.left)
//             this.preOrder(root.right)
//         }
//     }
// }

// const practice=new tree()

// practice.insert(10)
// practice.insert(5)
// practice.insert(2)
// practice.insert(6)
// practice.insert(15)
// practice.insert(13)
// practice.insert(22)

// // practice.preOrder(practice.root)

// //console.log(practice.findClosest(24))
// // let nodefinding=practice.findNode(5)
// // console.log(practice.height(nodefinding));
// // console.log(practice.finddepth(practice.root,5))
// // console.log(practice.evenNumber(practice.root));
// // console.log(practice.findMinValue(practice.root));
// console.log(practice.secondLargest());


                                                      





// let arr=[1,2,43,212,3457,67,32,1,71]
// let arr2=[]
// for (let i = 0; i < arr.length; i++) {
//      let x=arr[i].toString().split('')
//     arr2.push(Math.max(...x))
// }

// let xxx = Math.max(...arr2)
// let a=[]
// for (let i = 0; i < arr.length;i++) {
//     if (arr[i].toString().includes(xxx)) {
//         a.push(arr[i])
//     }
    
// }
// console.log('lllllllll',a);




// let d="myself3 me1 and2 i4"

//  let  arr= d.split(' ')

// let arr1=[]
// for (let i = 0; i < arr.length; i++) {
//     let l = arr[i].length
//     arr1[(arr[i][l-1])-1] = arr[i].slice(0,-1)
//     // arr1.push([[arr[i].slice(0,-1)],[arr[i][arr[i].length-1]]])
// }

// console.log(arr1.join(" "));



// let n=10
// let sum=0
// let count=0
// for (let i = 0; i <= n; i++) {
//     let mod = i%7
//     console.log(mod);
    
//     if(mod == 0) count++
//     sum+=mod+1*count
// }




