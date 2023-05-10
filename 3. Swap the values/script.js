function swapping(){

    console.log("Values before swapping: ", [...arguments]);

    const [x, y] = [...arguments];

    return [y, x];
}

const swappedValueArr = swapping(5, 10);
console.log("Values after swapping: ", swappedValueArr);