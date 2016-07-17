/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let result = new ListNode();
    let backup = result;
    let jw = false;
    while(l1!=null || l2!=null){
        let v1 = l1!=null?l1.val:0;
        let v2 = l2!=null?l2.val:0;
        let v = v1+v2;
        if(jw){
            v += 1;
            jw = false;
        }
        if(v>=10){
            jw=true;
            v = v%10;
        }
        l1 = l1!=null?l1.next:null;
        l2 = l2!=null?l2.next:null;
        backup.val = v;
        if(l1!=null || l2!=null){
            backup.next = new ListNode();
            backup = backup.next;
        }
    }
    if(jw){
        backup.next = new ListNode();
        backup = backup.next;
        backup.val = 1;
    }
    return result;
};

// let l1=new ListNode(2);
// l1.next = new ListNode(4);
// l1.next.next = new ListNode(3);

// let l2 = new ListNode(5);
// l2.next = new ListNode(6);
// l2.next.next = new ListNode(4);
let l1 = new ListNode(1);
l1.next = new ListNode(8);
let l2 = new ListNode(0);

let result = addTwoNumbers(l1,l2);
console.log(JSON.stringify(result));