"use strict";

var _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function log(target, name, descriptor) {
  console.log(target, name, descriptor);
} // es7 的decorator


var Car = log(_class = /*#__PURE__*/function () {
  function Car() {
    _classCallCheck(this, Car);
  }

  _createClass(Car, [{
    key: "run",
    value: function run() {
      console.log('Car is running');
    }
  }]);

  return Car;
}()) || _class;
