const mapper = require("automapper-js");
const { StudentDto } = require("../dtos");

class StudentController {
  // inyectamos las dependencias en el constructor
  constructor({ studentService }) {
    this._studentService = studentService;
  }

  // creamos metodos para las peticiones

  async getStudents(req, res) {
    // en una constante guardamos la respuesta de la funcion getUsers desde nuestro userServices
    let students = await this._studentService.getAll();
    students = students.map((student) => mapper(StudentDto, student));
    // retornamos la respuesta con el estatus
    return res.status(200).send({
      // indicando en un objeto el error false y users como payload
      error: false,
      payload: students,
    });
  }

  async getStudent(req, res) {
    const { id } = req.params;
    let student = await this._studentService.get(id);
    if (!student) {
      return res.status(404).send({
        payload: "Student doesn't exist",
      });
    }
    student = mapper(StudentDto, student);
    return res.status(200).send({
      error: false,
      payload: student,
    });
  }

  async createStudent(req, res) {
    // destructuramos body desde req
    const { body } = req;
    //  en una constante guardamos la respuesta de la funcion createUser pasando el body como parametro
    const createdStudent = await this._studentService.create(body);
    const student = mapper(StudentDto, createdStudent);
    // retornamos la respuesta
    return res.status(201).send({
      error: false,
      payload: student,
    });
  }

  async updateStudent(req, res) {
    const { body } = req;
    const { id } = req.params;

    await this._studentService.update(id, body);
    return res.status(204).send({
      error: false,
      payload: "student Updated successfully",
    });
  }

  async deleteStudent(req, res) {
    const { id } = req.params;

    await this._studentService.delete(id);
    return res.status(200).send({
      error: false,
      payload: "Student deleted successfully",
    });
  }
}

module.exports = StudentController;
