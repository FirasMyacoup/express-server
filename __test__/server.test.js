'use strict';

const supertest = require('supertest');
const server = require('../server');
const request = supertest(server.app);

describe('API', () => {
  it('welcome to the homepage', async () => {
    const res = await request.get('/');
    expect(res.status).toEqual(200);
    expect(res.text).toEqual('Hello')
  });

  it( 'Person', async () => {
    const res = await request.post( '/person' ).query( {
        name: 'firas', 
        age: 22,
        gender: 'male'
    } );
    expect( res.status ).toEqual( 200 );
    expect( res.text ).toEqual( '40' );
});
})