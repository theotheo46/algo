class Queue {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
		
		// Ставит элемент в очередь.
		// Возвращает новый размер очереди.
    enqueue(value) {
        const node = { value, next: null, prev: null };
        if (this.head === null) {
            this.head = node;
        }
        else {
            this.tail.next = node;
            node.prev = this.tail;
        }
        this.tail = node;
        return ++this.size;
    }
		
		// Убирает элемент из очереди.
		// Если очередь пустая, кидает ошибку.
		// Возвращает удалённый элемент.
    dequeue() {
        if (this.size == 0) {
            throw new Error('Pop from the empty q');
        }
        const node = this.head;
        const prevNode = this.head.next;
        if (prevNode !== null) {
            prevNode.prev = null;
        }
        else {
            this.tail = null;
        }
        this.head = prevNode;
        --this.size;
        return node;
    }
		
		// Возвращает элемент в начале очереди.
    peek() {
		return this.head;
    }
		
		// Если очередь пустая, возвращает true. В противном случае –– false.
    isEmpty() {
        return (this.size==0);
    }
}

const q = new Queue();
console.log(q);
q.enqueue(1);
q.enqueue(2);
q.enqueue(3);
console.log(q);
const node = q.dequeue();
console.log(node);
console.log(q);
q.dequeue();
console.log(q);
q.dequeue();
console.log(q);
q.dequeue();
