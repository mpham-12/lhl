const chai= require('chai');
const assert=chai.assert;

const shouldBuyCar= require('../shouldBuyCar.js');

describe('#shouldBuyCar()', function(){
  it("it should return false if it's a hatchback", function(){
    const car={
      type:'hatchback'
    };
    const shouldBuy=shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return true when the car is pink", function(){
    const car={
      color:'pink'
    };
    const shouldBuy=shouldBuyCar(car);
    assert.isTrue(shouldBuy);
  });

  it("should return false when there are no details about the car", function(){
    const car={
      details:''
    };
    const shouldBuy=shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

  it("should return false when the car is a hatchback and pink", function(){
    const car={
      color: 'pink',
type:'hatchback'
    };
    const shouldBuy=shouldBuyCar(car);
    assert.isFalse(shouldBuy);
  });

});