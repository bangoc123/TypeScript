document.write("<br>" + "---Function" + "<br>");

var getSum = function (num1: number, num2: number) :number{
    return num1 + num2;
}

var theSum1: number = getSum(2,5);

document.write("5 + 2 = " + theSum1 + "<br>");

var getDiff = function (num1: number, num2 = 2, num3?:number):number {
    if(typeof num3 != 'undefined'){
        return num1 - num2 - num3;
    }

    return num1 - num2;
}

document.write("5 - 2 = " + getDiff(5) + "<br>");
document.write("5-2-3 = " + getDiff(5,2,3) + "<br>");

var addOne = (x) => x + 1;

document.write("1 + 1 = " + addOne(1) + "<br>")