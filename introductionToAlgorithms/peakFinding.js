function findPeak1d(array){
    if(array[0] > array[1]){
        return 0
    }
    for(let i = 1; i < array.length - 1; i++){
        if(array[i] > array[i - 1] && array[i] > array[i + 1]){
            return i
        }
    }
    if(array[array.length - 1] > array[array.length - 2]){
        return array.length - 1
    }
    return -1
}

function findPeakBinSearch(array){
    let low = 0;
    let mid = array.length / 2
    let hi = array.length - 1

    while(hi - low > 1){
        if(array[mid] < array[mid + 1]){
            
        }

    }

}



console.log(findPeakBinSearch([1,2,3,4,5,6,7,8,9,10, 11]))