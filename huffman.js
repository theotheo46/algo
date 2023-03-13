// Наивная реализация очереди с приоритетом для экономии времени.
class PriorityQueue {
    constructor() {
        this.nodes = [];
        this.priority = new Map();
    }

    push(node, priority) {
        if (!this.priority.has(node)) {
            this.nodes.push(node);
        }

        this.priority.set(node, priority);
        this.nodes.sort((a, b) => this.priority.get(b) - this.priority.get(a));
    }

    pop() {
        if (!this.nodes.length) {
            return undefined;
        }

        const node = this.nodes.pop();
        const priority = this.priority.get(node);

        return [ node, priority ];
    }

    size() {
        return this.nodes.length;
    }
}


function huffman(str) {
    // высчитать частоту повторения каждого символа
    const rates = getRates(str);
    console.log(rates);
    // создать очередь с приоритетом, наполненную нодами для каждого символа
    const queue = buildQueue(rates);
    console.log(queue);

    // последняя оставшаяся нода будет корнем дерева
    const rootNode  = queue.pop()[0];
    console.log('rootNode');
    console.log(rootNode);
    // строим хеш-таблицу с кодом для каждого символа
    const codes = getCodes(rootNode);
    console.log('codes');
    console.log(codes);
    // кодируем строку
    const encodedStr = getEncodedStr(str, codes);

    // возвращаем результат
    return { codes, encodedStr };
}

// Считает частоту повторения каждого символа.
// Возвращает объект в формате { [char]: count }.
function getRates(str) {
	const frequencyTable = {};
    for (const char of str) {
        if (!frequencyTable[char]) {
            frequencyTable[char] = 0;
        }
        frequencyTable[char]++;
    }
    return frequencyTable;
}

// Создаёт очередь с приоритетом, наполненную нодами для каждого символа из ключей объекта rates.
// Формат ноды — { value: символ, left: null, right: null }.
function buildQueue(rates) {
    const priorityQueue = new PriorityQueue();
    for (const char in rates) {
      priorityQueue.push(char, rates[char]);
    }
    while (priorityQueue.size() > 1) {
      const left = priorityQueue.pop();
      const right = priorityQueue.pop();
      const parent = {value: null, left: null, right: null};
      parent.left = left[0];
      parent.right = right[0];
      priorityQueue.push(parent, left[1] + right[1]);
    }
    return priorityQueue;
}

// Строим хеш-таблицу с кодом для каждого символа, рекурсивно обходя дерево.
// Возвращает объект в формате { [char]: code }, где code — строка из нулей и единиц.
function getCodes(node, codes = {}, code = '') {
    // если нет детей, это лист, записываем значение в таблицу.
    if (!node.left && !node.right) {
        codes[node] = code;
    } else {
        // обходим левую и правую части дерева,
        // добавляя к code неоходимый бит в зависимости от направления.
        getCodes(node.left, codes, code+'0');
        getCodes(node.right, codes, code+'1');
    }
    return codes;
}
// Кодирует строку по таблице кодов и возвращает результат.
function getEncodedStr(str, codes) {
    let encodedMessage = '';
    for (let i = 0; i < str.length; i++) {
      encodedMessage += codes[str[i]];
    }
    return encodedMessage;
}


const str = 'foo bar baz';

console.log(huffman(str));

