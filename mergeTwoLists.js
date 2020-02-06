/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    let head = new ListNode(0),
        pointer = head
    
    while (l1 && l2){
        let val
        if (l1.val <= l2.val){
            val = l1.val
            l1 = l1.next
        } else {
            val = l2.val
            l2 = l2.next
        }
        
        let node = new ListNode(val)
        pointer.next = node;
        pointer = pointer.next
    }
    
    pointer.next = l1 || l2
    return head.next
};