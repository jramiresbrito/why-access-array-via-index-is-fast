/* Let's create this helper function to explain why access data in arrays
by index it's fast. */

const checkSize = (v) => {
  const type = typeof(v);
  switch (type) {
    case 'boolean':
      console.log('4 bytes');
      break;
    case 'number':
      console.log('8 bytes');
      break;
    case 'string':
      console.log(`${v.length * 2} bytes`);
      break;
    default:
      console.log("It's not primitive or it's null.");
      break;
  }
}

/* Arrays store itens sequentialy in memory. Because of this very reason,
access an iten in an array using the index it's very fast. Imagine this one:

|position in memory||position in memory||position in memory||position in memory|
|     element      ||     element      ||     element      ||     element      |

Having an array of numbers, like:
|100|108|116|124|
|10 |20 |30 |40 |

It's self explanatory, that all the computer needs it's to sum 8, index times to
the initial memory position. So having an array starting in pos 100 in the memory:

If you want the element at index 3 of the array:
100 + (8 * 3) = 124
*/
