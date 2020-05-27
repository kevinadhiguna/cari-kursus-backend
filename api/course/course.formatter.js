module.exports = course => {
  return {
    "name": course.name.value ,
    "category": course.category.value,
    "platform": course.platform.value,
    "link": course.link.value,
    "desc": course.desc.value,
    "feature": course.feature ? course.feature.value : ''
  }
}