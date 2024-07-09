//const expect = require('chai').expect
const axios = require('axios')


let expect;
(async () => {
    const chai = await import('chai');
    expect = chai.expect;

})();



describe('Test Suite 1', function () {
    it('promised based way', function () {
        this.timeout(2000);
        return axios.get('https://reqres.in/api/users?page=2').then(res => {
            expect(res.data.data[1].email).to.be.equal('lindsay.ferguson@reqres.in')
        })
            .catch(err => {
                console.error('Error during Test:', err)
                throw err;
            })

    })

  


})
