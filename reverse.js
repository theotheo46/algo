/*
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/

/**
 * function ListNode(value, next) {
 *     this.value = (value===undefined ? 0 : value)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 
 let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
/* 
function printReverseListInner(list) {
  if (list.next) {
    printReverseList(list.next);
	console.log('		' + list.value);
	console.log(list.next);
	if (node === null) {
		retList.value = list.next.value;
		retList.next = {value: list.value};
		node = retList.next;
	}
	else {
		node.next =  {value: list.value};
		node = node.next;
	}
		console.log('retList');
	console.log(retList);
  }
  console.log('@@@' + list.value);
  console.log(list.next);
} */


function printReverseList(list) {
	var retList = {};
	var node = null;
	function printReverseListInner(list) {
		  if (list.next) {
			printReverseListInner(list.next);
			console.log('		' + list.value);
			console.log(list.next);
			if (node === null) {
				retList.value = list.next.value;
				retList.next = {value: list.value};
				node = retList.next;
			}
			else {
				node.next =  {value: list.value};
				node = node.next;
			}
				console.log('retList');
			console.log(retList);
		  }
		  console.log('@@@' + list.value);
		  console.log(list.next);
		}
		printReverseListInner(list);
		return retList;
}


function reverse(head) {
    var node = head;
    var previous = null;
	var retList = {};
    while(node != null) {
        //next item
        var tmp = node.next;
				console.log('tmp');
		console.log(tmp);
						console.log('previous');
		console.log(previous);
        //swap items
        node.next = previous;
        previous = node;
        //next item
        node = tmp;
		console.log('node');
		console.log(node);
		console.log('******************************');
      }
    }

//console.log(list)
//reverse(list)
//console.log(list)




/* var retList = {};
	var node = null;
printReverseList(list); */


console.log('@@@@@@@@@@@@@@@@@@@@@@@@@');
console.log(list);
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@');
s = printReverseList(list)
console.log('@@@@@@@@@@@@@@@@@@@@@@@@@');
console.log(s);