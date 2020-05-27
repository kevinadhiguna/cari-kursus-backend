const CoursesRepository = require("./course.repo"); 
const formatter = require("./course.formatter");

exports.getCourses = async (req, res) => {
  const rawCourses = await CoursesRepository.get(req.query);
  const courses = rawCourses.bindings.map(formatter);

  return res.status(200).json(courses);
}