var variable = require('readline-sync');
const chalk = require('chalk');



var obj1 ={
  name:"ram",
  power:"2500",
  yuga:"treta"
}
var obj2 ={
  name:"krishna",
  power:"2325",
  yuga:"dwapar"
}




    // console.log(typeof(Number(obj1.power) ));
    // console.log(Number(obj1.power) > Number(obj2.power));
    // console.log(Number(obj1.power) <Number(obj2.power));
function playGAme(obj1,obj2){
 

  if (Number(obj1.power) > Number(obj2.power)){
    console.log(chalk.yellow(obj1.name + ' has more power than '+obj2.name));
  
  }  
  else if (Number(obj1.power) < Number(obj2.power)){
    console.log(chalk.yellow(obj2.name + ' has more power than '+obj1.name));
  
  }  
  
  else{
    console.log('they both have same power')
  }

}

playGAme(obj1,obj2);
