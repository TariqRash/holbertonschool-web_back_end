const fs=require('fs');
function countStudents(p){
try{
const data=fs.readFileSync(p,'utf8').split('\n').filter(Boolean);
const s=data.slice(1);
console.log(`Number of students: ${s.length}`);
const f={};
s.forEach(l=>{const[a,,,field]=l.split(',');if(!f[field])f[field]=[];f[field].push(a);});
for(const k in f){console.log(`Number of students in ${k}: ${f[k].length}. List: ${f[k].join(', ')}`);}
}catch{throw new Error('Cannot load the database');}}
module.exports=countStudents;
