const { Router } = require("express");

module.exports = function ({ teacherController }) {
  const router = Router();

  // definimos rutas
  router.get("/", teacherController.getTeachers.bind(teacherController));
  router.get("/:id", teacherController.getTeacher.bind(teacherController));
  router.post("/", teacherController.createTeacher.bind(teacherController));
  router.put("/:id", teacherController.updateTeacher.bind(teacherController));
  router.delete(
    "/:id",
    teacherController.deleteTeacher.bind(teacherController)
  );

  return router;
};
