
const assert = require('assert')

const linkedList = (val, next) => {
  return {
    val,
    next
  }
}

class PriorityQueue{
  constructor(){
   this.queueHead = linkedList()
   this.queueTail = linkedList()
   this.insert = this.insert.bind(this)
   this.peek = this.peek.bind(this)
   this.popMax = this.popMax.bind(this)
  }

  insert(data, priority){
    let newNode = linkedList({
      data,
      priority
    })
    let currNode
    if (!this.queueHead.val){
      this.queueHead = this.queueTail = newNode
    } else if (this.queueHead.val.priority < newNode.val.priority) {
      newNode.next = this.queueHead
      this.queueHead = newNode
    } else {
        currNode = this.queueHead
        while (currNode.val.priority > newNode.val.priority && currNode.next){
          currNode = currNode.next
        }
        currNode.next = newNode
        this.queueTail = newNode
      }
  }

  peek(){
      return this.queueHead
  }

  popMax(){
    let val = this.queueHead
    this.queueHead = this.queueHead.next
    return val
  }
}

let pq = new PriorityQueue()
pq.insert('doris', 9)
pq.insert('alex', 7)
pq.insert('david', 10)
pq.popMax()
assert.deepEqual(pq.peek().val, { data: 'doris', priority: 9 })
