module.exports.home = function(req, res){
    return res.end('<h1> Express is up for Codeial! </h1>');
}


module.exports.account = function(req, res){
    return res.end('<h1> Accounts Section </h1>');
}

//module.exports.actionName = function(req, res){}

// module.exports.about = function(req, res){
//     return res.end('<h1> Express is up for About Section! </h1>')
// }