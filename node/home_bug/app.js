const express = require('express');
const app = express();

app.use(express.static('static'));

app.get('/info', function (req, res) {
  let { data } = req.query;
  if (!data) {
    res.json({
      error:'参数有误'
    })
  }
  console.log(data);
  let obj = JSON.parse(data);
  console.log(obj);
  res.json({
    "539": obj[0].value
  })
})

app.listen(5000, () => {
  console.log('服务器启动了');
});