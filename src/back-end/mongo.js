const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const url = "mongodb://localhost:27017/";


function isLoginOk(loginS, passS, callback) {
   
    let objToFind = { login: loginS[0], pass: passS[0] };

    //connection à la base
    MongoClient.connect(url, function (err, db) {
        if (err) throw err;
        let dbo = db.db("testNode");

        //requete pour trouver si la combinaison existe
        dbo.collection('user').findOne(objToFind, (err, res) => {
            if (err) throw err;
            if (res) {
                //si oui on renvoie le login 
                callback({ login: res.login });
            } else {
                //si non on envoie un tag d'erreur
                callback({ err: "-1" });
            }
            
        });
        db.close();
    });

}


module.exports.isLoginOk = isLoginOk;
