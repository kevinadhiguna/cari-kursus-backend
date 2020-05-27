const CoursesRepository = require("./course.repo");
const formatter = require("./course.formatter");

exports.getCourses = async (req, res) => {
  let courses = await CoursesRepository.get(req.query);
  courses = courses.bindings.map((courses, index) => formatter(courses, index));

  if (req.params.id) {
    let result = courses.find((course) => {
      if (course.id = req.params.id)
        return courses
    });
    res.status(200).json(result);
  } else {
    return res.status(200).json(courses);
  }
}