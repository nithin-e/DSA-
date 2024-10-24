

class Node {
    constructor(data) {
       this.data=data
       this.left=null
       this.right=null 
    }
}

class tree {
    constructor() {
        this.root=null
    }

    insert(data){
        let NewNode=new Node(data)
        if(this.root==null){
            this.root=NewNode
        }else{

            let current=this.root
            while (true) {
                if (NewNode.data<current.data) {
                     if (current.left==null) {
                        current.left=NewNode
                        break;
                     }else{
                        current=current.left
                     }

                }else if(NewNode.data>current.data){

                    if (current.right==null) {
                        current.right=NewNode
                        break;
                     }else{
                        current=current.right
                     }
                }else{
                     console.log("duplicate is not possible ",NewNode.data);
                     return 
                }
            }
        }
    }

traverce(data){
   
    
let current=this.root
       
while (current!==null) {
    
    if (data<current.data) {
        
        current=current.left
    }else if(data>current.data){
         current=current.right
    }else{
    
        return current
        
        
    }
}
return null

}

height(root){
if (!root) {
    return -1
}

  let leftHeight=this.height(root.left)
  let righttHeight=this.height(root.right)

  return Math.max(leftHeight,righttHeight)+1
}


depth(root,data){
    let current=root
    let count=0
    while (current!==null) {
    
        if (data<current.data) {
            
            current=current.left
            count++
        }else if(data>current.data){
             current=current.right
             count++
        }else{
            return count  
        }
    }
}

evenNumber(root,arr=[]){
   
if (root) {
    if (root.data%2==0) {
        arr.push(root.data)
    }
    
    this.evenNumber(root.left,arr)
    this.evenNumber(root.right,arr)
}

return arr
}

smallELement(root){

let current=root
let arr=[]
while (current) {
    arr.push(current.data)
        current=current.right
}
return Math.max(...arr)
}


secondLargest(){


    let largest=-Infinity
    let small=-Infinity
    let current=this.root
    function traverce(current) {
    if (!current) {
        return;
    }
    
    if (current.data>largest) {
        small=largest
        largest=current.data
    }else if(current.data>small&&small!=largest){
       small=current.data
    }

    traverce(current.left)
    traverce(current.right)
    }

    traverce(current)
    return small
}


binaryTreChecking(root,min=-Infinity,max=Infinity){

if (!root) {
    return true
}

if (root.data<=min||root.data>=max) {
    return false
}

return (this.binaryTreChecking(root.left,min,root.data)&&this.binaryTreChecking(root.right,root.data,max))
}




preOrder(root){
if (root) {
    console.log(root.data);
    this.preOrder(root.left)
    this.preOrder(root.right)
}
}

}

const practice=new tree()
practice.insert(10)
practice.insert(5)
practice.insert(2)
practice.insert(15)
practice.insert(6)
practice.insert(13)
practice.insert(22)
// practice.insert(22)

// practice.preOrder(practice.root)

let nodefinding=practice.traverce(10)


// console.log(practice.height(nodefinding))

// console.log(practice.depth(practice.root,6));
// console.log(practice.evenNumber(practice.root));
// console.log(practice.smallELement(practice.root));

// console.log(practice.secondLargest());
console.log(practice.binaryTreChecking(practice.root));








