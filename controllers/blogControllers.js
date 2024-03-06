const Blog = require('../model/blog');

const blogList = (req, res) => {
    Blog.find().then((result) => {
        res.json({ blogs: result });
        // res.render('blog', { blogs: result });
    }).catch((err) => {
        console.log(err);
    })
}


const blogCreatePost = (req, res) => {
    try{
        const blog = new Blog(req.body);
        blog.save().then((result) => {
            res.redirect('/blog');
        }).catch((err) => {
            console.log(err);
        });
    } catch(err){
        console.log(err);
    }
}


const blogCreateGet = (req, res) => {
    res.render('create');
}


const blogDetails = (req, res) => {
    try{
        const id = req.params.id;
        Blog.findById(id).then((result) => {
        // res.render('details', {blog: result});
        res.json({blog: result});
    }).catch((err) => {
        res.status(404).render('404');
    })
    }
    catch(err){
        console.log(err);
    }
}


const blogDelete = (req, res) => {
    const id = req.params.id;
    Blog.findByIdAndDelete(id).then((result) =>{
        res.json({ redirect: '/blog' });
    }).catch(err => {
        console.log('err in app',err);
    })
}


module.exports = {
    blogList, blogCreatePost, blogCreateGet, blogDetails, blogDelete
}