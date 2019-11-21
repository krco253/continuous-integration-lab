const {expect} = require('../chai')
const request = require('supertest')

const app = require('../../main/app')

describe('GET - /', async () => {

    it('returns 404', async () => {
        // make a GET request on the app for the url '/'
        const response = await request(app).get('/')

        // check the HTTP status code
        expect(response.statusCode).to.equal(404)
        // check the raw text returned
        expect(response.text).to.equal('Not Found')
    })

    it('returns 404 again', async () => {
        // make a GET request on the app for the url '/'
        const response2 = await request(app).get('/2')

        // check the HTTP status code
        expect(response2.statusCode).to.equal(404)
        // check the raw text returned
        expect(response2.text).to.equal('Not Found Again :-(')
    })


})
