const Array = [5, 2, 7, 1, 9];

function minAndMaxValue(arr) {
    
    const minValue = Math.min(...arr);
    const maxValue = Math.max(...arr);

    const Obj = new Object()
    Obj['max']=maxValue
    Obj['min']=minValue

    return Obj;
}

console.log(minAndMaxValue(Array));