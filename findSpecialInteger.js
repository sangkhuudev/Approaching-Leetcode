/**
 * @param {number[]} arr
 * @return {number}
 */
function findSpecialInteger(arr){
    let hash=new Map();
    for (const item of arr){
         hash.set(item,1+(hash.get(item)||0))
    }
    for (const [key,val] of hash) {
        if(val>arr.length/4) return key
    }
}
