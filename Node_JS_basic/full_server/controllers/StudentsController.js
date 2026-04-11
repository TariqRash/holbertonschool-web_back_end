import {readDatabase} from '../utils';
export default class StudentsController{
static getAllStudents(req,res){
readDatabase(process.argv[2]).then(d=>{
let o='This is the list of our students\n';
Object.keys(d).sort().forEach(k=>{o+=`Number of students in ${k}: ${d[k].length}. List: ${d[k].join(', ')}\n`;});
res.status(200).send(o.trim());
}).catch(e=>res.status(500).send(e.message));}
static getAllStudentsByMajor(req,res){
const m=req.params.major;
if(m!=='CS'&&m!=='SWE') return res.status(500).send('Major parameter must be CS or SWE');
readDatabase(process.argv[2]).then(d=>res.status(200).send(`List: ${d[m].join(', ')}`))
.catch(e=>res.status(500).send(e.message));}}
