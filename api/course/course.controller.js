const CoursesRepository = require("./course.repo");
const formatter = require("./course.formatter");

exports.getCourses = async (req, res) => {
  let courses = await CoursesRepository.get(req.query);
  courses = courses.bindings.map((courses, index) => formatter(courses, index));

  return res.status(200).json(courses);
}