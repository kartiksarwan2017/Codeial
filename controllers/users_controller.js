// module.exports.profile = function(req, res){
//     res.end('<h1>User Profile</h1>');
// }

module.exports.contact = function(req, res){
    res.end('<h1>Contact Section</h1>');
}

module.exports.update = function(req, res){
    res.end('<h1>Update User Section</h1>');
}


module.exports.profile = function(req, res){
    return res.render('users',{
        title: "Users Section"
    });
}

