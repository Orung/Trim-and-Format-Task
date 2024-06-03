//   Create a file named “formatThousand” that contains a function named “formatThousand”.
//    The function should accept a number and return the number formatted with commas as thousands separators.
//     E.g If the input is 1000000, return value should be 1,000,000.


const formatThousand = (num) => {
    let pattern = /(-?\d+)(\d{3})/;
    num = num.toString();
    while (pattern.test(num))
    num = num.replace(pattern, "$1,$2");
    return num;
}

console.log(formatThousand(1000000000))
 