document.write("--For Statement" + "<br>")

var randArray = [5,6,7,8]

//Print index
for(var val in randArray){
    document.write(val + "<br/>")

}
//Convert to String
var strArray = randArray.map(String)

//Print value
for(var val of strArray){
    document.write("<br>" + val);
}