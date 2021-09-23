"use strict";

var _class, _class2;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// class Animal {//基类
//     constructor(language) {
//         this.species = '动物';
//         this.language = language;
//     }
//     speak() {
//         console.log('我能说' + this.language);
//     }
// }
//当一些类没有共同的祖先，但是又想拥有同样的方法
var speak = function speak(target) {
  var prototype = target.prototype;

  prototype.speak = function () {
    console.log('I can speak ', this.language);
  };
};

var Student = speak(_class = function Student(language) {
  _classCallCheck(this, Student);

  this.language = language;
}) || _class;

var Miao = speak(_class2 = function Miao(language) {
  _classCallCheck(this, Miao);

  this.language = language;
}) || _class2;

var aliStudent = new Student('es7');
aliStudent.speak();
var miaoMiao = new Miao('miao');
miaoMiao.speak();