function findRotationCount(arr) {
    let l = 0,
        r = arr.length - 1,
        res = 0;

    while(l <= r){
        // array is already sorted
        if(arr[l] < arr[r]) break;
        
        let mid = Math.floor((l+r)/2);
        res = mid;
        // one side of array will always be sorted
        // rotating counter-clockwise means elements in left sorted side of array will be greater
        
        // left sorted portion
        // mid is part of left sorted portion
        if(arr[mid] >= arr[l]){
            // check right portion
            l = mid + 1;
        // mid is part of right sorted portion
        } else {
            // check left portion
            r = mid - 1;
        }
        
    }

    return res;
}

module.exports = findRotationCount