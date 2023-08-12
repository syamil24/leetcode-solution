// NOTES: This code is not fully working

function listNode() {
  this.head = null;
  //   this.value = value;
  this.next = null;
}

let swapPairs = function (head) {
  var out = new listNode(0);
  var now = out;

  out.next = head;
  //   console.log("Now is " + now);

  while (now.next && now.next.next) {
    now = swap(now, now.next, now.next.next);
    console.log(now);
  }

  console.log("Out.next is " + out.next);
  return out.next;
};

function swap(a, b, c) {
  a.next = c;
  b.next = c.next;
  c.next = b;

  console.log("B is " + b);
  return b;
}

const list = {
  head: {
    value: 6,
    next: {
      value: 10,
      next: {
        value: 12,
        next: {
          value: 3,
          next: null,
        },
      },
    },
  },
};

swapPairs(list);
