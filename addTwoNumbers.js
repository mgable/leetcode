var addTwoNumbers = function(l1, l2) {
    let myList = new ListNode(0),
        l1number = [],
        l2number = [],
        pointer = myList
    
    while(l1 || l2){
      if (l1){
        l1number.push(l1.val)
        l1 = l1.next
      }
      if (l2){
        l2number.push(l2.val)
        l2 = l2.next
      }
    }

    let index = 0, total = [], carry

    while (index < l1number.length || index < l2number.length){
      let sum = (l1number[index] || 0) + (l2number[index] || 0)

      if (sum >= 10){
        if (l1number[(index + 1)] !== undefined){
          l1number[(index + 1)] += 1
        } else {
          l1number.push(1)
        }
      }
      total.unshift(sum % 10)
      index++
    }

    while(total.length){
      let node = new ListNode(total.pop())
      pointer.next = node
      pointer = node
    }

    return myList.next
};