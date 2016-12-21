var employees: string[] = ["Ngoc","Ha","Me","Bo"]


//Will be error
// employees.push(5)

document.write("--Array" + "<br>")
document.write(employees.toString() + "<br >");

interface SuperHero  {
    realname:String;
    superName:String;

}

var superheroes: SuperHero[] = [];
superheroes.push({
    realname: 'Ngoc',
    superName: 'Superman'
})

document.write(superheroes[0].realname + " is " + superheroes[0].superName);


