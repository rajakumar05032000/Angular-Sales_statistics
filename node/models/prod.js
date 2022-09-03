const database = require('../config/database');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

module.exports.logsData = (callback) => {
    MongoClient.connect(database.database, async (err, client) => {
        assert.equal(null, err);
        const db = client.db(database.dbName);
        await db.collection('Logs').find().toArray((err, result) => {
            assert.equal(null, err);
            client.close();

            callback(result);
        })
    });
}

module.exports.typeData = (callback) => {
    MongoClient.connect(database.database, async (err, client
    ) => {
        assert.equal(null, err);
        const db = client.db(database.dbName);
        await db.collection('Type').find().toArray((err, result) => {
            assert.equal(null, err);
            client.close();

            callback(result);
        })
    });
}

module.exports.userData = (callback) => {
    MongoClient.connect(database.database, async (err, client
    ) => {
        assert.equal(null, err);
        const db = client.db(database.dbName);
        await db.collection('UserTable').find().toArray((err, result) => {
            assert.equal(null, err);
            client.close();

            callback(result);
        })
    });
}

module.exports.saveLampType = (req, callback) => {
    console.log(123)
    MongoClient.connect(database.database, (err, client) => {
        assert.equal(null, err);
        const db = client.db(database.dbName);
        db.collection('Type').insertMany(req,(err, result) => {
            if (err) throw err;
            console.log("1 document inserted");
            client.close();
        });
    });
}

module.exports.saveProductionDataSession = (req, callback) => {
    console.log(123)
    MongoClient.connect(database.database, (err, client) => {
        assert.equal(null, err);
        const db = client.db(database.dbName);
        db.collection('LogsSample').insertMany(req,(err, result) => {
            if (err) throw err;
            console.log("1 document inserted");
            client.close();
        });
    });
}


module.exports.saveUserData = (req, callback) => {
    MongoClient.connect(database.database, (err, client) => {
        assert.equal(null, err);
        const db = client.db(database.dbName);
        db.collection('UserTable').insertMany(req,(err, result) => {
            if (err) throw err;
            console.log("1 document inserted");
            client.close();
        });
    });
}
