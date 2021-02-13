const { Router } = require("express");

module.exports = function ({ studentController }) {
  const router = Router();

  // definimos rutas
  router.get("/", studentController.getStudents.bind(studentController));
  router.get("/:id", studentController.getStudent.bind(studentController));
  router.post("/", studentController.createStudent.bind(studentController));
  router.put("/:id", studentController.updateStudent.bind(studentController));
  router.delete(
    "/:id",
    studentController.deleteStudent.bind(studentController)
  );

  return router;
};
// bind(userController
