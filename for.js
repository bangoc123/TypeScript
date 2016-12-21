document.write("--For Statement" + "<br>");
var randArray = [5, 6, 7, 8];
//Print index
for (var val in randArray) {
    document.write(val + "<br/>");
}
//Convert to String
var strArray = randArray.map(String);
//Print value
for (var _i = 0, strArray_1 = strArray; _i < strArray_1.length; _i++) {
    var val = strArray_1[_i];
    document.write("<br>" + val);
}
//# sourceMappingURL=for.js.map