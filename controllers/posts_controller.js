// module.exports.posts = function(res,res){
//     res.end('<h1>Users Posts</h1>');
// }


module.exports.posts = function(req, res){
    return res.render('posts',{

        title: "Posts Section"

    });
}