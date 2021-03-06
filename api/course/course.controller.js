const CoursesRepository = require("./course.repo");
const formatter = require("./course.formatter");

exports.getCourses = async (req, res) => {
  let courses = await CoursesRepository.get(req.query);
  courses = courses.bindings.map((courses) => formatter(courses));

  if (req.params.id) {
    return res.status(200).json(courses[req.params.id - 1]);
  } else {
    return res.status(200).json(courses);
  }
}