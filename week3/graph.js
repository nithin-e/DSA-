class Graph {
    constructor() {
        this.adjecentList={}
    }

    addVertex(vertex){
         if (!this.adjecentList[vertex]) {
            this.adjecentList[vertex]=new Set()
         }
    }

    addEdges(vertex1,vertex2,twoSideConnection=true){
  if (!this.adjecentList[vertex1]) {
    this.addVertex(vertex1)
  }
  if (!this.adjecentList[vertex2]) {
    this.addVertex(vertex2)
  }

  this.adjecentList[vertex1].add(vertex2)
  if (twoSideConnection) {
    this.adjecentList[vertex2].add(vertex1)
  }
    }

    BSF(start){
let Queue=[start]
let result=[]
let visited=new Set()
 visited.add(start)
  while (Queue.length>0) {
    let vertex=Queue.shift()
    result.push(vertex)
    if(this.adjecentList[vertex]){
    this.adjecentList[vertex].forEach(element => {
        if (!visited.has(element)) {
            Queue.push(element)
            visited.add(element)
        }
    });
}
  }
return result
    }

    remove(vertex){
        if (!this.adjecentList[vertex]) return; 
        for (const element of this.adjecentList[vertex]) {
         this.adjecentList[element].delete(vertex)
        }
        delete this.adjecentList[vertex]
    }


    display(){
        for (const vertex in this.adjecentList) {
           console.log(this.adjecentList[vertex]);
           
        }
    }
}

const practice=new Graph()
practice.addVertex("a")
practice.addVertex("b")
practice.addVertex("c")
practice.addVertex("d")

practice.addEdges("a","b",false)
practice.addEdges("b","c",false)
practice.addEdges("c","d",false)


practice.remove('a')
console.log(practice.BSF("a"));
