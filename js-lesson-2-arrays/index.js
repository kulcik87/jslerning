let arr = ['one', 'two', 'three', 'four', 'five'];

arr.push('six');
for(let i = 0; i < 10; i++) {
    arr.push(i);
}

let arr2 = arr.map(function(element) {
    if (element == 'four') {
        return 'dog';
    }
    return element;
});
console.log(arr, arr2);