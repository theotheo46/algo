class Stack {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
	
		// Кладёт элемент на стек.
		// Возвращает новый размер стека.
    push(value) {
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
		
		// Убирает элемент со стека.
		// Если стек пустой, кидает ошибку.
		// Возвращает удалённый элемент.
    pop() {
        if (this.size == 0) {
            throw new Error('Pop from the empty stack');
        }
        const node = this.tail;
        const prevNode = this.tail.prev;
        if (prevNode !== null) {
            prevNode.next = null;
        }
        else {
            this.head = null;
        }
        this.tail = prevNode;
        --this.size;
        return node;
    }
		
		// Возвращает верхний элемент стека без его удаления.
    peek() {
        return this.tail;
    }
		
		// Если стек пуст, возвращает true. В противном случае –– false.
    isEmpty() {
        return (this.size==0);
    }
}

const stack = new Stack();
console.log(stack.push(1));
console.log(stack.push(2));
console.log(stack);
console.log(stack.isEmpty());
console.log(stack.pop());
console.log(stack);
console.log(stack.pop());
console.log(stack);

