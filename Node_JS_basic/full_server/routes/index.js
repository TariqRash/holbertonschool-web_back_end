import express from 'express';
import AppController from '../controllers/AppController';
import StudentsController from '../controllers/StudentsController';
const r=express.Router();
r.get('/',AppController.getHomepage);
r.get('/students',StudentsController.getAllStudents);
r.get('/students/:major',StudentsController.getAllStudentsByMajor);
export default r;
