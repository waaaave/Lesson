var divide = require('./divide')
var expect = require('chai').expect // 断言库

describe('测试除法', function(){
  it('4 除 2 应该等于2', function(){
    expect(divide(4,2)).to.be.equal(2)
  })

  it('0 除 任何数 应该等于0', function(){
    expect(divide(0,2)).to.be.equal(0)
  })
})