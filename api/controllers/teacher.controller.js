const mapper = require("automapper-js");
const { TeacherDto } = require("../dtos");

class TeacherController {
  // inyectamos las dependencias en el constructor
  constructor({ teacherService }) {
    this._teacherService = teacherService;
  }

  // creamos metodos para las peticiones

  async getTeachers(req, res) {
    // en una constante guardamos la respuesta de la funcion getUsers desde nuestro userServices
    let teachers = await this._teacherService.getAll();
    teachers = teachers.map((teacher) => mapper(TeacherDto, teacher));
    // retornamos la respuesta con el estatus
    return res.status(200).send({
      // indicando en un objeto el error false y users como payload
      error: false,
      payload: teachers,
    });
  }

  async getTeacher(req, res) {
    const { id } = req.params;
    let teacher = await this._teacherService.get(id);
    if (!teacher) {
      return res.status(404).send({
        payload: "Teacher doesn't exist",
      });
    }
    teacher = mapper(TeacherDto, teacher);
    return res.status(200).send({
      error: false,
      payload: teacher,
    });
  }

  async createTeacher(req, res) {
    // destructuramos body desde req
    const { body } = req;
    //  en una constante guardamos la respuesta de la funcion createUser pasando el body como parametro
    const createdTeacher = await this._teacherService.create(body);
    const teacher = mapper(TeacherDto, createdTeacher);
    // retornamos la respuesta
    return res.status(201).send({
      error: false,
      payload: teacher,
    });
  }

  async updateTeacher(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._teacherService.update(id, body);
    return res.status(204).send({
      error: false,
      payload: "Teacher Updated successfully",
    });
  }

  async deleteTeacher(req, res) {
    const { id } = req.params;

    await this._teacherService.delete(id);
    return res.status(200).send({
      error: false,
      payload: "Teacher deleted successfully",
    });
  }
}

module.exports = TeacherController;
