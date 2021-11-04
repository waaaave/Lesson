// node 风格好一些 
// node 稳定的 commonJS方案
// babel @babel/core es6 模块化方案
import { get } from 'request-promise';
import { writeFile } from 'fs-extra';

get("https://en.wikipedia.org/wiki/Robert")
  .then(body => {
    //promise
    return writeFile ("article.html", body);
  })
  .then(() => {
    console.log("File written");
  })
  .catch(err => {
    console.error(err);
  })