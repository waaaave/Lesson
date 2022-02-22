// console.log('hello');
// es2017 es8
import app from './app/index'
import { APP_PORT } from './app/app.config'

app.listen(APP_PORT, () => {
  console.log('server starting');
  
})