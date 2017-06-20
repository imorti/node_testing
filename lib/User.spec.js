/**
 * Created by imorti on 6/20/17.
 */


'use strict'

const User = require('../User')
const db = require('../database')
const chai = require('chai')

const chaiAsPromised = require('chai-as-promised')

const expect = require('chai').expect

chai.use(chaiAsPromised)

describe('User module', () => {
    describe('"up"', () => {
        it('should export a function', () => {
            expect(User.up).to.be.a('function')
        })



it('should return a Promise', () => {
    const usersUpResult = User.up();
    expect(usersUpResult.then).to.be.a('Function')
    expect(usersUpResult.catch).to.be.a('Function')
})


it('should create a table called "users"', function * () {
    yield User.up()

    return expect(db.schema.hasTable('users'))
        .to.eventually.be.true
})

})

})