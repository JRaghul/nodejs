const { Module } =require('module')
const lodash =require('lodash');

module.exports.value='Raghul';



module.exports.add=(x,y)=>{
   return lodash.add(x,y)
}
module.exports.subtract=(x,y)=>{
    return lodash.subtract(x,y)
 }
 module.exports.multiply=(x,y)=>{
    return lodash.multiply(x,y)
 }
 module.exports.divide=(x,y)=>{
    return lodash.divide(x,y)
 }

 exports.calculate = (a, b, callback) => {
    const results = {
      addition: a + b,
      subtraction: a - b,
      multiplication: a * b,
      division: b === 0 ? 'Cannot divide by zero.' : a / b
    };
    callback(results);
  };