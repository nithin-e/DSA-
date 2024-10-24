
class BSTNODE {
    constructor(data) {
        this.data=data;
        this.left=null
        this.right=null
    }
}

class BST {
    constructor() {
        this.root=null
    }

    insertion(data){
let NewNode=new BSTNODE(data)

if (this.root==null) {
    this.root=NewNode
}else{
let current=this.root
while (true) {
    if (NewNode.data<current.data) {
        if(current.left==null){
           current.left=NewNode
           break;
        }else{
            current=current.left
        }
    }else if(NewNode.data>current.data){
        if (current.right==null) {
            current.right=NewNode
            break
        }else{
            current=current.right
        }
    }else{
        console.log("duplicate is not possible");
        return
        
    }
}
}
    }

preOrder(root){
if (root) {
    console.log(root.data);
    this.preOrder(root.left)
    this.preOrder(root.right)
    
}
}

inOrder(root){
    if (root) {
        this.inOrder(root.left)
        console.log(root.data);
        this.inOrder(root.right)
        
    }
}

postOrder(root){
if (root) {
    this.postOrder(root.left)
    this.postOrder(root.right)
    console.log(root.data);
    
}
}


findHeight(root){
if (root) {
   let leftHeigt= this.findHeight(root.left)
   let righttHeight=this.findHeight(root.right)
   return Math.max(leftHeigt,righttHeight)+1
}else{
    return -1
}
}

depth(root,data){

 let current=root
 let count=0

 while (current!=null) {
    if (data<current.data) {
        count++
        current=current.left
    }else if(data>current.data){
        count++
        current=current.right
    }else{
        return count
    }
 }

}

bstOrNot(root,min=-Infinity,max=Infinity){
if (!root) {
   return true 
}

if (root.data<=min||root.data>=max) {
    return false
}

return (this.bstOrNot(root.left,min,root.data)&&this.bstOrNot(root.right,root.data,max))

}

secondLarget(root){


    let current=root
    let largest=-Infinity
     let secondLargestt=-Infinity 
    function traverce(current) {
if (!current) {
    return false
}
if (current.data>largest) {
    secondLargestt=largest
    largest=current.data
   
}else if(current.data>secondLargestt&&largest!==secondLargestt){
  secondLargestt =current.data
}

   traverce(current.left)
   traverce(current.right)
    }
traverce(current)
return secondLargestt
}

oddNumber(root,arr=[]){
if (!root) {
    return false
}

if (root.data%2==0) {
    arr.push(root.data)
}

this.oddNumber(root.left,arr)
this.oddNumber(root.right,arr)
return arr
}

largestNode(){
    let current=this.root
    let arr=[]
    while (current!=null) {
        arr.push(current.data)
        current=current.right
    }

    return Math.max(...arr)
}

findClosest(target){
let current=this.root
let colse=current.data
 while (current) {
    if (Math.abs(colse-target)<Math.abs(current.data-target)) {
        colse=current.data
    }

    if (target<current.data) {
        current=current.left
    }else if(target>current.data){
        current=current.right
    }else{
        return current.data
    }
 }
return colse
}


DFS(){
if (!this.root) {
    return -1
}


let Queue=[]
 Queue.push(this.root)
 while (Queue.length) {
    let value=Queue.shift()
    console.log(value.data);
    if (value.left) {
       Queue.push(value.left) 
    }

    if (value.right) {
        Queue.push(value.right)
    }
    
 }

}
}

const practice=new BST()
practice.insertion(40)
practice.insertion(4)
practice.insertion(45)
practice.insertion(5)
practice.insertion(8)
practice.insertion(50)
practice.insertion(55)
practice.insertion(65)


// practice.inOrder(practice.root)

// console.log(",,,,,,,,,",practice.findHeight(practice.root))

// console.log(",,,,,,,,,,,,,,,,",practice.depth(practice.root,4));
// console.log("checking result:",practice.bstOrNot(practice.root));
// console.log("secontLargest:",practice.secondLarget(practice.root));
// console.log("oddNumbers:",practice.oddNumber(practice.root));
// console.log("largetNode:",practice.largestNode());
// console.log("closestNode:",practice.findClosest(51));
 practice.DFS()






