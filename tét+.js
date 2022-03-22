// Viết một function đảo ngược một string bất kỳ, sử dụng các phương thức của array.
function reversearr(arr1) {
    let arr2 = arr1.split("").reverse().join("");
    return arr2;
}
console.log(reversearr('abcdef'));
// Viết một function xoá các phần từ trùng lặp trong một mảng các số:
function number() {
    let number2 = [1, 2, 3, 5, 4, 2, 6, 4];

    let number3 = number2.filter((item, index) => number2.indexOf(item) === index)
    console.log(number3);
}
number()

//Viết một chương trình lấy phần tử xuất hiện nhiều nhất trong một mảng và số lần suất hiện của nó trong mảng:

let arr = ['1', '2', '3', '5', '6', '4', '2', '1', '6', '3', '5', '3'];
let a = 1;
let b = 0;
let item;
for (var i = 0; i < arr.length; i++) {
    for (var j = i; j < arr.length; j++) {
        if (arr[i] == arr[j])
            a++;
        if (b < a) {
            b = a;
            item = arr[i];
        }
    }
    a = 0;
}
console.log(item + " ( " + b + " times ) ");