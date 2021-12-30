var add = require('./add')
var expect = require('chai').expect

// 举例子，尽量覆盖代码执行的各种可能性 99% 左右说明正确

describe('加法函数的测试', function(){
  it('1加1应该等于2', function(){
    expect(add(1, 1)).to.be.equal(2)
  })

  it('0加 任何数 应该等于那个数', function(){
    expect(add(0, 2)).to.be.equal(2)
  })

  it('字符串数字和任何数字相加要等于值相加', function(){
    expect(add('1', 1)).to.be.equal(2)
  })
})