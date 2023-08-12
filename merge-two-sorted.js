function ListNode(val, next) {
  this.val = val;
  this.next = next;
}

//can also do like this
/* function ListNode(val) {
  this.val = val;
  this.next = null;
} */

let mergeTwoSortedLists = function (l1, l2) {
  let sortedList = new ListNode(0);
  let temp = sortedList;

  while (l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      temp.next = l1;
      l1 = l1.next;
    } else {
      temp.next = l2;
      l2 = l2.next;
    }
    temp = temp.next;
  }

  if (l1 == null) temp.next = l2;
  if (l2 == null) temp.next = l1;

  //   console.log(sortedList.next);
  return sortedList.next;
};

let n3 = new ListNode(7, null);
let n2 = new ListNode(5, n3);
let n1 = new ListNode(6, n2);
let nodeList1 = n1;

// console.log(nodeList1);

let m3 = new ListNode(9, null);
let m2 = new ListNode(3, m3);
let m1 = new ListNode(4, m2);
let nodeList2 = m1;

// console.log(nodeList2);

mergeTwoSortedLists(nodeList1, nodeList2);
