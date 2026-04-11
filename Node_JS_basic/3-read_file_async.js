const fs=require('fs').promises;
function countStudents(p){
return fs.readFile(p,'utf8').then(d=>{
const data=d.split('\n').filter(Boolean);
const s=data.slice(1);
console.log(`Number of students: ${s.length}`);
const f={};
s.forEach(l=>{const[a,,,field]=l.split(',');if(!f[field])f[field]=[];f[field].push(a);});
for(const k in f){console.log(`Number of students in ${k}: ${f[k].length}. List: ${f[k].join(', ')}`);}
}).catch(()=>{throw new Error('Cannot load the database');});}
module.exports=countStudents;
