function findRotatedIndex(arr, target) {
    let l = 0,
        r = arr.length - 1;
     
    while(l <= r){
        // get middle index of array
        let mid = Math.floor((l+r)/2);
        
        // target has been found
        // return target index
        if(target === arr[mid]) return mid;
        
        // one side of array will always be sorted
        // left sorted portion
        if(arr[l] <= arr[mid]){
            // left side is the sorted side
            
            // check what portion of array target is in
            if(target < arr[l] || arr[mid] < target){
                // target is NOT in left portion, check right portion
                l = mid + 1;
            } else{
                // target is NOT in right portion, check left portion
                r = mid - 1;
            }
            
        // right sorted portion
        } else {
            
            //check what side of array target is in
            if(target < arr[mid] || target > arr[r]){
                // target is NOT in right portion, check left portion
                r = mid - 1;
            } else {
                // target is NOT in left portion, check right portion
                l = mid + 1;
            }
        }
    }
    
    // num was not found
    return -1;
}

module.exports = findRotatedIndex