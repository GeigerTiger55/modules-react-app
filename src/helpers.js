"use strict";


/** Takes an array of items
 * 
 * Returns random item
 */
function choice(items) {
    const randIdx = Math.floor(items.length * Math.random());

    return items[randIdx];
}


/** Takes an array of items and item to be removed
 * 
 * If found in array, removes item from array and Returns removed item 
 * 
 * If not found, Returns undefined
 */
function remove(items, item) {
    const itemIndex = items.findIndex(i => i === item);
    if(itemIndex === -1) {
        return undefined;
    } 
    return items.splice(itemIndex, 1);
}

export { choice, remove };