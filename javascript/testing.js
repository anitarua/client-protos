"use strict";
exports.__esModule = true;
var dist_1 = require("./dist");
var testProto = dist_1.example.example;
var testVar = new testProto.Example(['123']);
console.log(testVar.bigInt);
