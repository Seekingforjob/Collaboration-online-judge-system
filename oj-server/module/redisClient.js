var redis = require('redis');
var client = redis.createClient();

function set(key, value, callback){
    client.set(key, value, function(err, res){
        if(err){
            console.log(err);
            return;
        }
        callback(res);
    })
}

function get(key, callback) {
    client.get(key, function(err, res){
        if(err){
            console.log(err);
            return;
        }
        callback(res);
    })
}

function expire(key, timeInseconds){
    client.expire(key,timeInseconds);

}

function quit(){
    client.quit();
}

module.exports = {
    get,
    set,
    expire:expire,
    quit:quit,
    redisPrint: redis.print
}