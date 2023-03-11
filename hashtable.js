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
    let memoryLocation = this.hash(key, this.size);
    if (!this.memory[memoryLocation]) {
      this.memory[memoryLocation] = [];
    }
    let index = this.memory[memoryLocation].find((x) => x[0] === key);
    if (index !== undefined) {
      this.memory[memoryLocation][index] = value;
    }
    else {
       this.memory[memoryLocation].push([key, value]);
    }
    //return this.memory;
  }
	
	// Возвращает значение в хеш-таблице по ключу.
	// Если ключа нет, возвращает undefined.
  get(key) {
    let memoryLocation = this.hash(key);
    if (!this.table[memoryLocation]) return null;
    return this.memory[memoryLocation].find((x) => x[0] === key)[1];
  }
	
	// Удаляет значение из хеш-таблице по ключу.
  remove(key) {
    let memoryLocation = this.hash(key);
    if (!this.table[memoryLocation]) return null;
    this.memory[memoryLocation] = [];
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
