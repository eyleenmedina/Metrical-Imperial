function ConvertHandler() {
  var regexUnidad = /[A-Za-z]/;
  var regexNum = /[0-9]/
  var regexOtro = /\W/g;
  let unitBank = ['gal','l','mi','km','lbs','kg'];
  
  this.getNum = function(input) {
    var result;
    let index = input.indexOf(input.match(regexUnidad));
    (input.indexOf(input.match(regexNum)) === -1)? result = 1:result = input.slice(0,index);
    console.log(result.match(regexOtro));
    (result.match(regexOtro).length > 1)? result = "Invalid number": result = eval(result).toFixed(6);
    return result;
  };
  
  this.getUnit = function(input) {
    var result;
    var valido = false;
    let index = input.indexOf(input.match(regexUnidad));
    result = input.slice(index);
    for(var i=0; i<unitBank.length;i++){
      if (result === unitBank[i]){
        valido = true;
      }
    }
    (valido)? result = result: result = "Invalid unit"
      return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch(initUnit.toLowerCase()){
      case 'mi' : return result='km';
      case 'km' : return result='mi';
      case 'gal': return result='l';
      case 'l'  : return result='gal';
      case 'lbs': return result='kg';
      case 'kg' : return result='lbs';
      default   : return result = 'Invalid Unit';
        }
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch(unit.toLowerCase()){
      case 'mi' : return result='miles';
      case 'km' : return result='kilometers';
      case 'gal': return result='gallons';
      case 'l'  : return result='liters';
      case 'lbs': return result='pounds';
      case 'kg' : return result='kilograms';
      default   : return result = 'Invalid Unit';
                   }
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch(initUnit.toLowerCase()){
      case 'mi' : return result=initNum*miToKm;
      case 'km' : return result=initNum/miToKm;
      case 'gal': return result=initNum*galToL;
      case 'l'  : return result=initNum/galToL;
      case 'lbs': return result=initNum*lbsToKg;
      case 'kg' : return result=initNum/lbsToKg;
      default   : return result = 'ERROR';
                    }
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    result = initNum+' '+this.spellOutUnit(initUnit)+" converts to "+returnNum.toFixed(5)+" "+this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;