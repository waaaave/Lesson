"use strict";

var _class, _class2, _descriptor, _init, _class3, _temp;

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

var MyClass = log1(_class = (_class2 = (_temp = _class3 = /*#__PURE__*/function () {
  function MyClass() {
    _classCallCheck(this, MyClass);

    _initializerDefineProperty(this, "name", _descriptor, this);

    this.name = 'chou';
  }

  _createClass(MyClass, [{
    key: "getName",
    value: function getName() {
      console.log(this.name);
    }
  }]);

  return MyClass;
}(), _defineProperty(_class3, "age", 10), _temp), (_applyDecoratedDescriptor(_class2.prototype, "getName", [log2], Object.getOwnPropertyDescriptor(_class2.prototype, "getName"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "name", [log2], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function initializer() {
    return 'chou';
  }
}), _applyDecoratedDescriptor(_class2, "age", [log2], (_init = Object.getOwnPropertyDescriptor(_class2, "age"), _init = _init ? _init.value : undefined, {
  enumerable: true,
  configurable: true,
  writable: true,
  initializer: function initializer() {
    return _init;
  }
}), _class2)), _class2)) || _class; // es6的class 后面怎么会有prototype？ 
// es6的class只是语法糖，本质上还是 原型式继承


function log1(target) {
  target.prototype.logger = function () {
    return console.log("\u6211\u662F".concat(target.name, "\u7C7B"));
  };
}

function log2(target, name, descriptor) {
  console.log('target:', target);
  console.log('name:', name);
  console.log('descriptor:', descriptor);
}

var test = new MyClass();
test.logger();
console.log(MyClass.age);