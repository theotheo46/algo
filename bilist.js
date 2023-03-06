class DoublyLinkedList {
    constructor() {
        this.size = 0;
        this.head = null;
        this.tail = null;
    }
  
    _checkIndexForAdd(index) {
      if ((index !== undefined) && (index < 0 || index > this.size)) {
        throw new Error('Index is out of list range (add)');
      }
      else {
        return true;
      }
    }
	
	_checkIndex(index) {
      if ((index !== undefined) && (index < 0 || index > this.size - 1 )) {
        throw new Error('Index is out of list range');
      }
      else {
        return true;
      }
    }
		
		// Добавляет элемент в список.
		// Если указан индекс - добавляет по индексу, 
		// в противном случае добавляет в конец.
		// Если индекс за пределами — кидает ошибку.
	add(value, index) {
           if (this._checkIndexForAdd(index)) {
		   const node = createNode(value);
             if (index===undefined) {
                if (this.tail) {
                  // Присоединяем новый узел к концу связного списка.
                  this.tail.next = node;
                }

                // В новом узле указываем ссылку на предыдущий (previous) элемент на this.tail,
                // так как новый узел будет теперь последним.
                node.prev = this.tail;

                // Переназначаем tail на новый узел.
                this.tail = node;

                // Если ещё нет head, делаем новый узел head.
                if (!this.head) {
                  this.head = node;
                }
				++this.size;
             }
             else {
			let i = 0;
		   let currentNode = this.head;
          while (currentNode) {
            if (i==index) {
              if (i==0) {
                // то делаем следующий узел новым head
				this.head.prev = node;
                node.next = this.head;
				this.head = node;

                // Меняем в новом head ссылку (previous) на null.
				this.head.prev = null;
				++this.size;
                return;
              }  else {
                // то делаем следующий узел новым head
				let nextNode = currentNode.next;
				node.next = nextNode;
				nextNode.prev = node;
				node.prev = currentNode;
				currentNode.next = node;
				++this.size;
                return;
              }
            }
        // Перематываем на один узел вперёд.
            currentNode = currentNode.next;
            i++;
          }
               
		 }
	   }
    }
		
		// Удаляет элемент из списка по значению.
		// Удаляет только первый найденный элемент.
		// Если элемент не найден, ничего делать не нужно.
    removeByValue(value) {
        if (!this.head) {
          return;
        }
          let deletedNode = this.searchByValue(value);
		  if (deletedNode !== null) {
			if (deletedNode === this.head) {
            // то делаем следующий узел новым head
            this.head = deletedNode.next;

            // Меняем в новом head ссылку (previous) на null.
            if (this.head) {
              this.head.prev = null;
            }
			--this.size;
            return;
          } else if (deletedNode === this.tail) {
            // Если tail должен быть удален, -
            // меняем tail на предпоследний узел, который станет новым хвостом.
            this.tail = deletedNode.prev;
            // Обновляем ссылку next в новом хвосте.
            this.tail.next = null;
			--this.size;
            return;
          } else {
            // Если средний узел будет удален, -
            // сохраняем ссылку на предыдущий элемент,
            const previousNode = deletedNode.prev;
            // и сохраняем ссылку на следующий элемент.
            const nextNode = deletedNode.next;
            // Меняем ссылки у предыдущего и следующего узлов от удаленного узла,
            // чтобы они больше не ссылались на удаленный узел.
            previousNode.next = nextNode;
            nextNode.prev = previousNode;
			--this.size;
			return;
          }
			  
		  }

     

    }
		
		// Удаляет элемент из списка по индексу.
		// Если индекс за пределами — кидает ошибку.
    removeByIndex(index) {
        if (this._checkIndex(index)) {
          if (!this.head) {
            return;
          }
          let deletedNode = this.searchByIndex(index);		 
              if (index==0) {
                // то делаем следующий узел новым head
                this.head = deletedNode.next;

                // Меняем в новом head ссылку (previous) на null.
                if (this.head) {
                  this.head.prev = null;
                }
				if (--this.size == 0) {
					this.tail = null;
				}
                return;
              } else if (index == this.size-1) {
                // Если tail должен быть удален, -
                // меняем tail на предпоследний узел, который станет новым хвостом.
                this.tail = deletedNode.prev;
                // Обновляем ссылку next в новом хвосте.
                this.tail.next = null;
				--this.size;
                return;
              } else {
                // Если средний узел будет удален, -
                // сохраняем ссылку на предыдущий элемент,
                const previousNode = deletedNode.prev;
                // и сохраняем ссылку на следующий элемент.
                const nextNode = deletedNode.next;
                // Меняем ссылки у предыдущего и следующего узлов от удаленного узла,
                // чтобы они больше не ссылались на удаленный узел.
                previousNode.next = nextNode;
                nextNode.prev = previousNode;
				--this.size;
                return;
              }
        }
    }
		
		// Ищет элемент в списке по индексу.
		// Если индекс за пределами — кидает ошибку.
    searchByIndex(index) {
      if (this._checkIndex(index)) {
			if (!this.head) {
				return null;
            }
               let currentNode = this.head;
              if (index === 0) {
                  return currentNode;
              } 
              for (let i = 1; i <= index; i++) {
                  currentNode = currentNode.next;
              }
              return currentNode;
      }
    }

		// Ищет элемент в списке по значению.
		// Возвращает первый найденный элемент.
		// Опционально можно указать индекс начала поиска.
		// Если индекс за пределами — кидает ошибку.
		// Если элемент не найден, нужно вернуть null.
    searchByValue(value, startIndex = 0) {
      if (this._checkIndex(startIndex)) {
		if (!this.head) {
			return null;
		}
        startIndex = (startIndex===undefined) ? 0 : startIndex;
		let currentNode = this.head;
        for (let i = startIndex; i < this.size; i++) {
          if (value === currentNode.value) {
            return currentNode;
          }
          currentNode = currentNode.next;
        }
        return null;
      }
    }
	
	toArray() {
		  const nodes = [];

		  let currentNode = this.head;

		  // Перебираем все узлы и добавляем в массив.
		  while (currentNode) {
			nodes.push(currentNode);
			currentNode = currentNode.next;
		  }

		  // Возвращаем массив из всех узлов.
		  return nodes;
		}

}

// Создаёт новую ноду, где
// value — её значение,
// next — ссылка на следующую ноду,
// prev — ссылка на предыдущую ноду
function createNode(value) {
	return {
		value,
		next: null,
		prev: null,
	};
}

const list = new DoublyLinkedList();
 list.add(5);
list.add(3);
list.add(-13);
list.add(555,0);
console.log(list.head);
console.log(list);
console.log(list.toArray());
console.log('********************************************');
console.log(list.searchByIndex(1));

console.log(list.searchByValue(3));
console.log('********************************************');
list.removeByValue(3)
console.log(list.toArray());
console.log('********************************************');
list.removeByIndex(2)
console.log(list.toArray()); 


list.add(3);
console.log(list.toArray());
list.removeByIndex(0)
console.log(list.toArray());
