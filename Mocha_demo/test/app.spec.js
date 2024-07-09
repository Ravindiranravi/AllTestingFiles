// const { should } = require('chai');
const {add,sub,mul,div} = require('../src/app')
//const except = require('chai').except;
let expect;
(async () =>{
    const chai = await import('chai');
    expect  = chai.expect;

})();

//1.BDD - "describe" and "it"
describe('Suite 1',()=>{
    it ('add(10,5) should return 15',()=>{
        expect(add(10,5)).to.be.equal(15);
    })
})
describe('Suite 2',()=>{
    it ('sub(10,5) should return 5',()=>{
        expect(sub(10,5)).to.be.equal(5);
    })
})

describe('Suite 3',()=>{
    it ('mul(10,5) should return 50',()=>{
        expect(mul(10,5)).to.be.equal(50);
    })
})

describe('Suite 4',()=>{
    it ('div(10,5)) should return 2',()=>{
        expect(div(10,5)).to.be.equal(2);
    })
})