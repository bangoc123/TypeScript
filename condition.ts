
document.write("---Condition Statement")
// Can not modify let

let sample = 123;

if(true){
    let sample = 456;

}

document.write("<br>"+ "sample: " + sample + "<br>");


var sample2 = 123;
if(true){
    sample2 = 456;
}

document.write("<br>" + "sample2: " + sample2 + "<br>");