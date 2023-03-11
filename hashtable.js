class HashTable {
  constructor(size) {
    if (!size || size < 0) {
        throw new Error('Размер должен быть положительным числом');
    }

    this.size = size;
    this.memory = new Array();
  }
	
	// Добавляет пару [key, value] в хеш-таблицу.
	// Если ключ существует, перезаписывает значение.
  set(key, value) {
    let memoryLocation = hash(key, this.size);
    if (!this.memory[memoryLocation]) {
      this.memory[memoryLocation] = [];
    }
    for (let i = 0; i < this.memory[memoryLocation].length; i++) {
      if (this.memory[memoryLocation][i][0] === key) {
         this.memory[memoryLocation][i][1] = value;
         return;
      }
    }
    this.memory[memoryLocation].push([key, value]);
  }
	
	// Возвращает значение в хеш-таблице по ключу.
	// Если ключа нет, возвращает undefined.
  get(key) {
    let memoryLocation = hash(key, this.size);
    console.log(memoryLocation);
    if (!this.memory[memoryLocation]) return null;
    return this.memory[memoryLocation].find((x) => x[0] === key)[1];
  }
	
	// Удаляет значение из хеш-таблице по ключу.
  remove(key) {
    let memoryLocation = hash(key, this.size);
    if (!this.memory[memoryLocation]) return null;
    for (let i = 0; i < this.memory[memoryLocation].length; i++) {
      if (this.memory[memoryLocation][i][0] === key) {
         delete this.memory[memoryLocation][i][1];
         this.memory[memoryLocation].splice(i, 1);
         return true;
      }
   }
   return false;
  }
}

// Хеширующая функция.
function hash(key, size) {
  const MAX_LENGTH = 200;

  const start = key.length > MAX_LENGTH ? 
		Math.floor((key.length % MAX_LENGTH) / 2) : 0;
  const end = Math.min(key.length, MAX_LENGTH);

  let total = 0;

  for (let i = 0; i < end; i++) {
      const charCode = key.charCodeAt(start + i);
      total = (total + charCode * (i + 1)) % size;
  }

  return total;
}

const ht = new HashTable(100);

console.log(ht);
ht.set('abcde', 10);
console.log(ht);
ht.set('abcdee', 100);
console.log(ht);
console.log(ht.get('abcde'));
ht.remove('abcde');
console.log(ht);
ht.remove('abcdee');
console.log(ht);
