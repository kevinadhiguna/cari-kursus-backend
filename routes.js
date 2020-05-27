const express = require('express');
const Course = require('./api/course/course.controller')

// create new express router
const router = express.Router();

router.get('/course', Course.getCourses);

module.exports = router;