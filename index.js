// 1

const express = require('express');
// const cors = require('cors');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');

const app = express();

// app.use(cors());
const PORT = process.env.PORT || 8000;
const dbURI = "mongodb+srv://blog_user:12345@mongosocio.vtpscar.mongodb.net/blogs?retryWrites=true&w=majority"
mongoose.connect(dbURI)
.then((result) => app.listen(PORT))
.catch((err) => console.log('err is',err))


// app.set('view engine', 'ejs');
// app.set('views', 'files');

app.use(express.json());
app.use(express.urlencoded( { extended: true } ));
// -> middleware


// if you are naming the views a diff name then need to specify this line otherwise byDefault express will see the views folder
console.log("the app is running");


// app.get('/see-blog', (req, res) => {
//     const blog = new Blog({
//         title: 'MERN Stack 2',
//         desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt velit hic libero illum ipsam, eius dicta quam tempore itaque iusto.'
//     })

//     blog.save()
//         .then((result) => {
//             res.send(result);
//         })
//         .catch((err) => {
//             console.log(err);
//         });
// });


app.get('/', (req, res) => {
    // res.send('<p>home page</p>');
    // res.render("index");
    res.json({"msg": "hello from backend"});
});
// home routing


// app.get('/about', (req, res) => {
//     res.render("about");
// });
// about routing


app.use('/blog',blogRoutes);


app.use((req, res) => {
    // res.status(404).render("404");
    res.status(404).json({"msg": "404 not found"});
});
// garbage routing
// -> middleware
// it actually takes the first param as any route we pass in, means if we keep it in the top for any route(home or about) it will show the 4040 page only. That's why we have to keep it at bottomm in order to handle our exception case.

// GET
// http://localhost:8000/blog/
// http://localhost:8000/blog/create/
// http://localhost:8000/blog/:id

// POST
// http://localhost:8000/blog/

// DELETE
// http://localhost:8000/blog/:id