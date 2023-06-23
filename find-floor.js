function findFloor(arr, x) {
    let l = 0,
        r = arr.length - 1,
        res = -1;

    while(l <= r){
        let mid = Math.floor((l+r)/2);

         // left sorted portion
        if(arr[mid] <= x){
            // check right portion for x
            l = mid + 1;
            
            // only values left of x will be smaller
            // update max value less than x
            res = Math.max(res, arr[mid]);

        // right sorted portion
        } else {
            // check left portion for x
            r = mid - 1;
        }
        
    }

    return res;
}

module.exports = findFloor