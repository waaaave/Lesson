# Ajax操作步骤
  - 1. 创建对象
  const xhr = new XMLHttpRequest();

  - 2. 初始化 设置请求的方法和url
  xhr.open('GET','http:-localhost:1234/server');

  - 3. 发送
  xhr.send();

  - 4. 事件绑定 处理服务器端返回的结果
  xhr.onreadystatechange = function(){
    
  }

  
