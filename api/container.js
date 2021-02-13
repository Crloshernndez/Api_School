const { asClass, createContainer, asFunction, asValue } = require("awilix");

//app start
const Startup = require("./startup");
const Server = require("./server");
const config = require("../config/index");

// routes
const Routes = require("./routes");
const StudentRoutes = require("./routes/student.routes");
const TeacherRoutes = require("./routes/teacher.routes");
const CourseRoutes = require("./routes/course.routes");
const RegistrationRoutes = require("./routes/registration.routes");
const SectionRoutes = require("./routes/section.routes");

//business
const {
  StudentBusiness,
  CourseBusiness,
  RegistrationBusiness,
  SectionBusiness,
  TeacherBusiness,
} = require("./../domain");

//controllers
const {
  StudentController,
  CourseController,
  RegistrationController,
  SectionController,
  TeacherController,
} = require("./controllers");

//services
const {
  StudentService,
  CourseService,
  RegistrationService,
  SectionService,
  TeacherService,
} = require("../services");

//repositories
const {
  StudentRepository,
  CourseRepository,
  RegistrationRepository,
  SectionRepository,
  TeacherRepository,
} = require("../dataAccess/repositories");

//db
const db = require("../dataAccess/models");

// se crea el container para inyeccion de dependencias
const container = createContainer();

// se registra un servicio
container
  // registramos las dependencias por capas
  // registros para la capa api
  .register({
    // cuando se llamen las keys mandara como objeto de clase una unica instancia de Startup
    app: asClass(Startup).singleton(),
    server: asClass(Server).singleton(),
    // creamos registro controllers
    studentController: asClass(StudentController).singleton(),
    teacherController: asClass(TeacherController).singleton(),
    courseController: asClass(CourseController).singleton(),
    registrationController: asClass(RegistrationController).singleton(),
    sectionController: asClass(SectionController).singleton(),

    // creamos registro para rutas
    router: asFunction(Routes).singleton(),
    studentRoutes: asFunction(StudentRoutes).singleton(),
    teacherRoutes: asFunction(TeacherRoutes).singleton(),
    courseRoutes: asFunction(CourseRoutes).singleton(),
    registrationRoutes: asFunction(RegistrationRoutes).singleton(),
    sectionRoutes: asFunction(SectionRoutes).singleton(),
  })

  //creamos registro para config asValue por que es un objeto
  .register({
    config: asValue(config),
  })
  //registro para la capa de service
  .register({
    studentService: asClass(StudentService).singleton(),
    teacherService: asClass(TeacherService).singleton(),
    courseService: asClass(CourseService).singleton(),
    registrationService: asClass(RegistrationService).singleton(),
    sectionService: asClass(SectionService).singleton(),
  })
  // registro para la capa dataAccess
  .register({
    studentRepository: asClass(StudentRepository).singleton(),
    teacherRepository: asClass(TeacherRepository).singleton(),
    courseRepository: asClass(CourseRepository).singleton(),
    registrationRepository: asClass(RegistrationRepository).singleton(),
    sectionRepository: asClass(SectionRepository).singleton(),
  })
  .register({
    db: asValue(db),
  })
  // registro para la capa dominio
  .register({
    studentBusiness: asClass(StudentBusiness).singleton(),
    teacherBusiness: asClass(TeacherBusiness).singleton(),
    courseBusiness: asClass(CourseBusiness).singleton(),
    registrationBusiness: asClass(RegistrationBusiness).singleton(),
    sectionBusiness: asClass(SectionBusiness).singleton(),
  });

module.exports = container;
