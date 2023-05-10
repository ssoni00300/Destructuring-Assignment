function accessElements(arr) {
    
    const [first, second] = arr.slice(0, 2);

    const last = arr[arr.length - 1];

    return [first, second, last];
}


console.log(accessElements([1, 2, 3, 4, 5]));
console.log(accessElements([200, 400, 800, 1600]));