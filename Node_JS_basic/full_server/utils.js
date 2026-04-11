import fs from 'fs';
export function readDatabase(p){
return new Promise((res,rej)=>{
fs.readFile(p,'utf8',(e,d)=>{
if(e) return rej(new Error('Cannot load the database'));
const lines=d.split('\n').filter(Boolean).slice(1);
const out={};
lines.forEach(l=>{const[a,,,f]=l.split(',');if(!out[f])out[f]=[];out[f].push(a);});
res(out);});});}
