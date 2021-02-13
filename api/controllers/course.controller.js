const mapper = require("automapper-js");
const { CourseDto } = require("../dtos");

class CourseController {
  // inyectamos las dependencias en el constructor
  constructor({ courseService }) {
    this._courseService = courseService;
  }

  // creamos metodos para las peticiones

  async getCourses(req, res) {
    // en una constante guardamos la respuesta de la funcion getUsers desde nuestro userServices
    let courses = await this._courseService.getAll();
    courses = courses.map((course) => mapper(CourseDto, course));
    // retornamos la respuesta con el estatus
    return res.status(200).send({
      // indicando en un objeto el error false y users como payload
      error: false,
      payload: courses,
    });
  }

  async getCourse(req, res) {
    const { id } = req.params;
    let course = await this._courseService.get(id);
    course = mapper(CourseDto, course);
    return res.status(200).send({
      error: false,
      payload: course,
    });
  }

  async createCourse(req, res) {
    // destructuramos body desde req
    const { body } = req;
    //  en una constante guardamos la respuesta de la funcion createUser pasando el body como parametro
    const createdCourse = await this._courseService.create(body);
    const course = mapper(CourseDto, createdCourse);
    // retornamos la respuesta
    return res.status(201).send({
      error: false,
      payload: course,
    });
  }

  async updateCourse(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._courseService.update(id, body);
    return res.status(204).send({
      error: false,
      payload: "Course Updated successfully",
    });
  }

  async deleteCourse(req, res) {
    const { id } = req.params;

    await this._courseService.delete(id);
    return res.status(200).send({
      error: false,
      payload: "Course deleted successfully",
    });
  }
}

module.exports = CourseController;
