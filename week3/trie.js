
class TrieNode {
    constructor() {
        this.children={}
        this.endNode=false
    }
}

class Trie {
    constructor() {
        this.root=new TrieNode()
    }

    insertion(word){
        let current=this.root
    for (const char of word) {
        if (!current.children[char]) {
            current.children[char]=new TrieNode()
        }
        current=current.children[char]
    }
    current.endNode=true
    }

    serch(word){
        let current=this.root
        for (const char of word) {
            if (!current.children[char]) {
                return false
            }
            current=current.children[char]
        }
        return current.endNode
    }

    startWith(word){
let current=this.root
 for (const char of word) {
    if (!current.children[char]) {
        return false
    }
    current=current.children[char]
 }
 return true
    }

    delete(word){
 
let helperFuntion=(current,word,index)=>{

    if (word.length==index) {
        if (!current.endNode) {
            return false
        }
        current.endNode=false
        return Object.keys(current.children).length==0
    }

    let char=word[index]
    let checkingWord=current.children[char]
    if (!checkingWord) {
        return false
    }

    let deleteNode=helperFuntion(checkingWord,word,index+1)
    if (deleteNode) {
        delete current.children[char]
        return Object.keys(current.children).length==0&&!current.endNode
    }
}
helperFuntion(this.root,word,0)
    }


    lonestPrefix(){
        let current=this.root
        let prefix=""
        while (current&&!current.endNode&&Object.keys(current.children)) {
          let  keys=Object.keys(current.children)
          let  check  =keys[0]
          prefix+=check
          current=current.children[check]
        }
        return prefix
    }

    Autocomplete(word){

let current=this.root
let result=[]
for (const char of word) {
    if(!current.children[char]){
        return []
    }
    current=current.children[char]
}
this.wordCombination(current,word,result)
  return result
    }

    wordCombination(current,word,result){
if (current.endNode) {
    result.push(word)
}

for (const char in current.children) {
    this.wordCombination(current.children[char],word+char,result)
}
    }


    display(){
        let current=this.root
        let result=[]
        
      let  helperFuntion=(current,prefix)=>{
            if (current.endNode) {
                result.push(prefix)
            }

            for (const char in current.children) {
                helperFuntion(current.children[char],prefix+char)
            }
        
        }
        helperFuntion(current,"")
        return result
    }

}


const practice=new Trie()
let arr=['apple','apply','app','appu']

for(const char of arr){
    
    practice.insertion(char)
}

// practice.delete('app')

// console.log('this is there:',practice.serch('app'));
// console.log('starting with:',practice.startWith('g'));
// console.log('longest Prefix:',practice.lonestPrefix());
// console.log('Autocomplete:',practice.Autocomplete('ap'));
console.log("display:",practice.display());




