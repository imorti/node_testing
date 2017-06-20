/**
 * Created by imorti on 6/20/17.
 */
'use strict'

const db = require('./database')

const tableName = 'users'

function up () {

    return db.schema.createTableIfNotExists(tableName, (table) => {
            table.increments()
    table.string('name')
    table.timestamps()
    })
}



module.exports = {
    up
}