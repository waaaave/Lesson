import { get } from 'request-promise';
import { writeFile } from 'fs-extra';

async function getCleanCodeArticle(){
  try {
    let articles = await get("https://en.wikipedia.org/wiki/Robert")
    await writeFile ("article.html", articles);
  } catch (error) {
    console.error(error)
  }
  
  console.log('写入完成');
}

await getCleanCodeArticle();