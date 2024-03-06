const express = require('express');
const blogController = require('../controllers/blogControllers');
const router = express.Router();

// blog routing
router.get('/', blogController.blogList);


// creating a blog using post
router.post('/', blogController.blogCreatePost);


// blog creating routing
// router.get('/create', blogController.blogCreateGet);


// getting the blog in detail
router.get('/:id', blogController.blogDetails);


// blog delete routing
router.delete('/:id', blogController.blogDelete);


module.exports = router;