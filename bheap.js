const root = 0;
const left = i => (i << 1) + 1;
const right = i => (i + 1) << 1;
const parent = i => ((i + 1) >> 1) - 1;

class BinaryHeap {
  
  constructor() {
    this.data = [];
  }

  size() {
    return this.data.length;
  }

  peek() {
    return this.data[0];
  }
  
  insert(...values) {
    values.forEach(value => {
      this.data.push(value);
      this.heapifyUp();
    })
  }

  builddata(values) {
    values.forEach(value => {
      this.data.push(value);
    });

    let n = values.length;
    let lastNonLeafNode = (n >> 1) - 1;

    for (let i = lastNonLeafNode; i >= 0; i--) {
      this.heapify(i);
    }
  }

  heapify(i) {
    let node = i;
    let l = left(node);
    let r = right(node);
    let n = this.size();
    
    if (l < n && this.data[node] < this.data[l]) {
      node = l;
    }

    if (r < n && this.data[node] < this.data[r]) {
      node = r;
    }

    if (node !== i) {
      this.swap(node, i);
      this.heapify(node);
    }
  }

  extract() {
    let poppedVal = this.peek();
    let last = this.size() - 1;
    let top = 0;

    // swap top with last
    if(last > top)
      this.swap(top, last);

    // remove last node
    this.data.pop();

    this.heapifyDown();

    return poppedVal;
  }

  swap(i, j) {
    let temp = this.data[i];
    this.data[i] = this.data[j];
    this.data[j] = temp;
  }

  heapifyUp() {
    let node = this.size() - 1;

    while (node > 0 && this.data[node] > this.data[parent(node)]) {
      this.swap(node, parent(node));
      node = parent(node);
    }
  }

  heapifyDown() {
    let node = root; 
    let n = this.size();
    let max;

    while (left(node) < n && this.data[node] < this.data[left(node)] ||
          right(node) < n && this.data[node] < this.data[right(node)]) {
      
      max = this.data[left(node)];

      max = this.data[right(node)] !== undefined ? Math.max(max, this.data[right(node)]) : max;

      if (this.data[node] > max) {
        break;
      }

      if (max === this.data[left(node)]) {
        this.swap(node, left(node));
        node = left(node);
      } else {
        this.swap(node, right(node));
        node = right(node);
      }
    }
  }
}


const bh = new BinaryHeap();
console.log(bh);
bh.insert(10);
console.log(bh);
bh.insert(20);
console.log(bh);
bh.insert(5)
console.log(bh);
console.log(bh.extract());
console.log(bh);
