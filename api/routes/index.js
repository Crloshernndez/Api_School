const { Router } = require("express");
// bodyparser nos parceara las respuestas del body en json
const bodyParser = require("body-parser");
// cors nos permite hacer peticiones desde otros servidores
const cors = require("cors");
// compression comprime las peticiones http
const compression = require("compression");

module.exports = function ({
  studentRoutes,
  teacherRoutes,
  courseRoutes,
  registrationRoutes,
  sectionRoutes,
}) {
  const router = Router();
  const apiRoute = Router();

  // indicamos que la apiRoute utilice los midleware
  apiRoute.use(cors()).use(bodyParser.json()).use(compression());

  // configuraremos las rutas que vendran por dependencias
  apiRoute.use("/student", studentRoutes);
  apiRoute.use("/teacher", teacherRoutes);
  apiRoute.use("/course", courseRoutes);
  apiRoute.use("/registration", registrationRoutes);
  apiRoute.use("/section", sectionRoutes);

  // configuramos la ruta para apiRouter
  router.use("/api", apiRoute);
  return router;
};
