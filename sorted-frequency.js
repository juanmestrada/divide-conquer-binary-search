function sortedFrequency(arr, val) {
    if(arr[arr.length - 1] < val) return -1;

    let left = search(arr, val, "first");
    let right = search(arr, val, "last");
    
    return (right - left) + 1;
}

function search(arr, target, firstorlast){
    let l = 0;
    let r = arr.length - 1;
    let index = -1;
    
    while(l <= r){
        let mid = Math.floor((l+r)/2);
        
        if(target > arr[mid]){
            l = mid + 1;
        } else if(target < arr[mid]){
            r = mid - 1;
        } else {
            index = mid;
            
            if(firstorlast === "first"){
                r = mid - 1;
            } else{
                l = mid + 1;
            }
        }
    }
    
    return index;
}

module.exports = sortedFrequency