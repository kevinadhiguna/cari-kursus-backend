module.exports = (course) => {
  return {
    "id": parseInt(course.c.value.substring(course.c.value.length - 3, course.c.value.length)),
    "name": course.name.value,
    "category": course.category.value,
    "platform": course.platform.value,
    "link": course.link.value,
    "desc": course.desc.value,
    "feature": course.feature ? course.feature.value.split(", ") : ''
  }
}