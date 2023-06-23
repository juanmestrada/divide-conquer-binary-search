function countZeroes(arr) {
    
    if(arr[0] === 0) return arr.length;
    
    if(arr[arr.length - 1] > 0) return 0;
    
    let l = 0;
    let r = arr.length - 1;
    
    while(l <= r){
        let mid = Math.floor((l + r) / 2);
        
        if(arr[mid] > 0){
            l = mid + 1;
        } else if(arr[mid] === 0){
            r = mid - 1;
        } 
    }
    return arr.length - l;
}

module.exports = countZeroes