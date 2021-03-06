'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      var initUnit = convertHandler.getUnit(input);
    
      if(initUnit==="Invalid unit" && initNum==="Invalid number"){
        res.statusCode = 400;
        return res.json({
          "error":"Invalid Number and Unit"
        });
      }
      if(initNum==="Invalid number"){
                return res.json({
          "error":"invalid number",
        });
      }
      if(initUnit==="Invalid unit"){
        return res.json({
          "error":"invalid unit",
        });
      }
    
      var returnNum = convertHandler.convert(initNum, initUnit);
      var returnUnit = convertHandler.getReturnUnit(initUnit);
      var toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      res.json({
        "initNum":initNum,
        "initUnit":initUnit,
        "returnNum": returnNum,
        "returnUnit": returnUnit,
        "string": toString
      })
    });
    
};

