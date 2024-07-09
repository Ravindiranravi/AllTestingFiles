//const expect = require('chai').expect
const axios = require('axios')


let expect;
(async () => {
    const chai = await import('chai');
    expect = chai.expect;

})();

// describe('Tset Suite 1', () =>{
//     it('promised based way',function(){
//         return axios.get('https://reqres.in/api/users?page=2').then(res =>{
//             expect(res.data.data[1].email).to.be.equal('lindsay.ferguson@reqres.in')
//         })
//     })
// });







describe('async test suite', () => {
    it('promised based way', () => {

        return axios.get('http://localhost:8888/user').then(res => {
            expect(res.data.data[1].email).to.be.equal('lindsay.ferguson@reqres.in')
            expect(res.data.data[1].id).to.be.equal(1)
        })

    })


    it('done based way', (done) => {

        axios.get('https://reqres.in/api/users?page=2').then(res => {
            expect(res.data.data[0].email).to.be.equal('michael.lawson@reqres.in')
            done()
        }).catch(err => {
            done(err)
        })

    });

    it('async await based way', async() => {

        const res = await axios.get('https://reqres.in/api/users?page=2')
            expect(res.data.data[0].email).to.be.equal('michael.lawson@reqres.in')

    });

})

