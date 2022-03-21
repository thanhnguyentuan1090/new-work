function reversearr(arr1) {
    let arr2 = arr1.split("").reverse().join("");
    return arr2;
}
console.log(reversearr('abcdef'));

function number() {
    let number2 = [1, 2, 3, 5, 4, 2, 6, 4];

    let number3 = number2.filter((item, index) => number2.indexOf(item) === index)
     console.log(number3);  
}
number()

function duplicate () {
    let dup1 = [1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3];
    console.log(dup1.split("").length - 1);
}
