document.write("<br>" + "---Function" + "<br>");
var getSum = function (num1, num2) {
    return num1 + num2;
};
var theSum1 = getSum(2, 5);
document.write("5 + 2 = " + theSum1 + "<br>");
var getDiff = function (num1, num2, num3) {
    if (num2 === void 0) { num2 = 2; }
    if (typeof num3 != 'undefined') {
        return num1 - num2 - num3;
    }
    return num1 - num2;
};
document.write("5 - 2 = " + getDiff(5) + "<br>");
document.write("5-2-3 = " + getDiff(5, 2, 3) + "<br>");
var addOne = function (x) { return x + 1; };
document.write("1 + 1 = " + addOne(1) + "<br>");
//# sourceMappingURL=function.js.map