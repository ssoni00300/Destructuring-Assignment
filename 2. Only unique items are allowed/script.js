const NumArr = [800, 400, 100, 200, 600, 200, 400, 500, 200, 800];



function uniqueNum(arr) {
    let uniqueSet = new Set([...arr])
    return uniqueSet
}


const UniqueArrNum = uniqueNum(NumArr);
console.log(UniqueArrNum);