document.write("---Condition Statement");
// Can not modify let
var sample = 123;
if (true) {
    var sample_1 = 456;
}
document.write("<br>" + "sample: " + sample + "<br>");
var sample2 = 123;
if (true) {
    sample2 = 456;
}
document.write("<br>" + "sample2: " + sample2 + "<br>");
//# sourceMappingURL=condition.js.map