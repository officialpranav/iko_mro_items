const { SqliteError } = require('better-sqlite3');
const sql = require('better-sqlite3')
// not needed tbh

class TranslationDatabase {
    constructor() {
        // save location is in user %appdata%
        this.db = new sql(`${process.env.APPDATA}/iko_utility/AssetTransList.db`);//, { verbose: console.log });
    }

}