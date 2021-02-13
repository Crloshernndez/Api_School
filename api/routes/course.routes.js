const { Router } = require("express");

module.exports = function ({ courseController }) {
  const router = Router();

  // definimos rutas
  router.get("/", courseController.getCourses.bind(courseController));
  router.get("/:id", courseController.getCourse.bind(courseController));
  router.post("/", courseController.createCourse.bind(courseController));
  router.put("/:id", courseController.updateCourse.bind(courseController));
  router.delete("/:id", courseController.deleteCourse.bind(courseController));

  return router;
};
