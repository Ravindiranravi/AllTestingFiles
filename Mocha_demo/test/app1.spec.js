const {AreaofCirlce} = require('../src/app1')
let expect;
(async () =>{
    const chai = await import('chai');
    expect  = chai.expect;
})();

describe('Suite 1',()=>{
    it('AreaofCirlce(5) should return  78.53981633974483',()=>{
        expect(AreaofCirlce(5)).to.be.equal( 78.53981633974483);
    })
})

context('AlaisMSuite 1',()=>{
    specify ('AreaofCirlce(5) should return  78.53981633974483',()=>{
        expect(AreaofCirlce(5)).to.be.equal( 78.53981633974483);
    })
})


const{suite,test} = require('mocha')
suite('TDDSuite 1',()=>{
    test ('AreaofCirlce(5) should return  78.53981633974483',()=>{
        expect(AreaofCirlce(5)).to.be.equal( 78.53981633974483);
    })
})